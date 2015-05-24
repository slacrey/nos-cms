package com.nos.plug.work.action.front;

import com.nos.cms.entity.assist.CmsGuestbook;
import com.nos.common.util.JsonUtils;
import com.nos.common.web.ResponseUtils;
import com.nos.core.entity.CmsSite;
import com.nos.core.web.WebErrors;
import com.nos.core.web.util.CmsUtils;
import com.nos.core.web.util.FrontUtils;
import com.nos.plug.reserve.entity.CmsReserve;
import com.nos.plug.work.entity.WmsWork;
import com.nos.plug.work.entity.WmsWorkProgress;
import com.nos.plug.work.manager.WmsWorkMng;
import com.nos.plug.work.manager.WmsWorkProgressMng;
import org.apache.commons.lang.StringUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

import static com.nos.cms.Constants.TPLDIR_SPECIAL;

@Controller
public class WmsWorkAct {

    @Autowired
    private WmsWorkMng wmsWorkMng;

    @Autowired
    private WmsWorkProgressMng wmsWorkProgressMng;

    @RequestMapping(value = "/work/{phone}.jspx", method = RequestMethod.GET)
    public String detail(@PathVariable String phone, HttpServletRequest request,
                         HttpServletResponse response, ModelMap model) {
        CmsSite site = CmsUtils.getSite(request);
        if (StringUtils.isNotBlank(phone)) {
            model.addAttribute("phone", phone);
            List<WmsWork> works = wmsWorkMng.findByPhone(100, phone);
            if (works != null && !works.isEmpty()) {
                for (WmsWork wmsWork: works) {
                    if (wmsWork != null) {
                        List<WmsWorkProgress> workProgresses = wmsWorkProgressMng.findByWorkId(wmsWork.getId());
                        if (workProgresses != null && !workProgresses.isEmpty()) {
                            wmsWork.setWorkProgresses(workProgresses);
                        }
                    }
                }
                model.addAttribute("works", works);
            }
        }
        FrontUtils.frontData(request, model, site);
        return FrontUtils.getTplPath(request, site.getSolutionPath(),
                "work", "tpl.workIndex");

    }

    @RequestMapping(value = "/work/query.jspx", method = RequestMethod.POST)
    public void queryWorkProgress(String phone, String idNumber, HttpServletResponse response) throws JSONException{


        JSONObject json = new JSONObject();
        if (StringUtils.isNotBlank(phone) && StringUtils.isNotBlank(idNumber)) {


            List<WmsWork> works = wmsWorkMng.findByPhone(100, phone, idNumber);
            if (works != null && !works.isEmpty()) {
                for (WmsWork wmsWork: works) {
                    if (wmsWork != null) {
                        List<WmsWorkProgress> workProgresses = wmsWorkProgressMng.findByWorkId(wmsWork.getId());
                        if (workProgresses != null && !workProgresses.isEmpty()) {
                            wmsWork.setWorkProgresses(workProgresses);
                        }
                    }
                }
            }

            if (works != null && !works.isEmpty()) {
                json.put("success", true);
                json.put("status", 0);
                json.put("data", JsonUtils.getInstance().toJson(works));
            } else {
                json.put("success", false);
                json.put("status", 1);
            }
        } else {
            json.put("success", false);
            json.put("status", 1);
        }
        ResponseUtils.renderJson(response, json.toString());
    }

}