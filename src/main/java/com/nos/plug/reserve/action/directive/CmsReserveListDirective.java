package com.nos.plug.reserve.action.directive;

import com.nos.common.web.freemarker.DirectiveUtils;
import com.nos.plug.reserve.manager.CmsReserveMng;
import freemarker.core.Environment;
import freemarker.template.ObjectWrapper;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateDirectiveModel;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

public class CmsReserveListDirective
        implements TemplateDirectiveModel {
    public static final String PARAM_COUNT = "count";

    @Autowired
    private CmsReserveMng testMng;

    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body)
            throws TemplateException, IOException {
        Integer count = DirectiveUtils.getInt("count", params);
        List list = this.testMng.getList(count.intValue(), true);
        Map paramWrap = new HashMap(
                params);
        paramWrap.put("tag_list", ObjectWrapper.DEFAULT_WRAPPER.wrap(list));
        Map origMap = DirectiveUtils.addParamsToVariable(env, paramWrap);
        body.render(env.getOut());
        DirectiveUtils.removeParamsFromVariable(env, paramWrap, origMap);
    }
}