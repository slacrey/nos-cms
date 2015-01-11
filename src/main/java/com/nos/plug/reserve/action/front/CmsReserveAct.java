package com.nos.plug.reserve.action.front;

import com.nos.common.web.RequestUtils;
import com.nos.common.web.ResponseUtils;
import com.nos.core.entity.CmsSite;
import com.nos.core.entity.CmsUser;
import com.nos.core.web.WebErrors;
import com.nos.core.web.util.CmsUtils;
import com.nos.core.web.util.FrontUtils;
import com.nos.plug.reserve.entity.CmsReserve;
import com.nos.plug.reserve.manager.CmsReserveMng;
import com.octo.captcha.service.CaptchaServiceException;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class CmsReserveAct {
    public static final String INDEX = "tpl.reserveIndex";
    public static final String DETAIL = "tpl.reserveDetail";

    @Autowired
    private CmsReserveMng cmsTestMng;

    @RequestMapping(value = {"/reserve/index.jspx"}, method = {org.springframework.web.bind.annotation.RequestMethod.GET})
    public String index(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
        CmsSite site = CmsUtils.getSite(request);
        FrontUtils.frontData(request, model, site);
        FrontUtils.frontPageData(request, model);
        return FrontUtils.getTplPath(request, site.getSolutionPath(), "reserve", "tpl.reserveIndex");
    }

    @RequestMapping(value = {"/reserve/detail.jspx"}, method = {org.springframework.web.bind.annotation.RequestMethod.GET})
    public String detail(Integer id, HttpServletRequest request, HttpServletResponse response, ModelMap model) {
        CmsSite site = CmsUtils.getSite(request);
        CmsReserve reserve = null;
        if (id != null) {
            reserve = this.cmsTestMng.findById(id);
        }
        if ((id == null) || (reserve == null)) {
            WebErrors errors = WebErrors.create(request);
            errors.addErrorCode("not fount reserve");
            FrontUtils.showError(request, response, model, errors);
        }
        model.addAttribute("reserve", reserve);
        FrontUtils.frontData(request, model, site);
        return FrontUtils.getTplPath(request, site.getSolutionPath(), "reserve", "tpl.reserveDetail");
    }

    /**
     * 提交留言。ajax提交。
     *
     * @param contentId
     * @param pageNo
     * @param request
     * @param response
     * @param model
     * @throws org.json.JSONException
     */
    @RequestMapping(value = "/reserve/reserveSave.jspx", method = RequestMethod.POST)
    public void submit(Integer siteId, String name,
                       String phone, String description,
                       HttpServletRequest request,
                       HttpServletResponse response, ModelMap model) throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        CmsUser member = CmsUtils.getUser(request);
        if (siteId == null) {
            siteId = site.getId();
        }
        JSONObject json = new JSONObject();
        String ip = RequestUtils.getIpAddr(request);
        cmsTestMng.saveFront(site, member, siteId, name, phone, ip, description);
        json.put("success", true);
        json.put("status", 0);
        ResponseUtils.renderJson(response, json.toString());
    }
}