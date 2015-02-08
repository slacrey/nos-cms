package com.nos.plug.work.action.directive;

import com.nos.common.web.freemarker.DirectiveUtils;
import com.nos.plug.work.entity.WmsWork;
import com.nos.plug.work.entity.WmsWorkProgress;
import com.nos.plug.work.manager.WmsWorkMng;
import com.nos.plug.work.manager.WmsWorkProgressMng;
import freemarker.core.Environment;
import freemarker.template.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CmsWorkListDirective
        implements TemplateDirectiveModel {
    public static final String PARAM_COUNT = "count";
    public static final String PARAM_PHONE = "phone";

    @Autowired
    private WmsWorkMng wmsWorkMng;
    @Autowired
    private WmsWorkProgressMng wmsWorkProgressMng;

    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body)
            throws TemplateException, IOException {
        Integer count = DirectiveUtils.getInt(PARAM_COUNT, params);
        String phone = DirectiveUtils.getString(PARAM_PHONE, params);
        List<WmsWork> list = this.wmsWorkMng.findByPhone(count.intValue(), phone);
        if (list != null && !list.isEmpty()) {
            for (WmsWork wmsWork: list) {
                if (wmsWork != null) {
                    List<WmsWorkProgress> workProgresses = wmsWorkProgressMng.findByWorkId(wmsWork.getId());
                    if (workProgresses != null && !workProgresses.isEmpty()) {
                        wmsWork.setWorkProgresses(workProgresses);
                    }
                }
            }
        }

        Map paramWrap = new HashMap(
                params);
        paramWrap.put("tag_list", ObjectWrapper.DEFAULT_WRAPPER.wrap(list));
        Map origMap = DirectiveUtils.addParamsToVariable(env, paramWrap);
        body.render(env.getOut());
        DirectiveUtils.removeParamsFromVariable(env, paramWrap, origMap);
    }
}