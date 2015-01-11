package com.nos.plug.reserve.action.admin;

import javax.servlet.http.HttpServletRequest;

import com.nos.common.page.Pagination;
import com.nos.common.page.SimplePage;
import com.nos.common.web.CookieUtils;
import com.nos.core.entity.CmsSite;
import com.nos.core.web.WebErrors;
import com.nos.core.web.util.CmsUtils;
import com.nos.plug.reserve.entity.CmsReserve;
import com.nos.plug.reserve.manager.CmsReserveMng;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.nos.common.page.SimplePage.cpn;

@Controller
public class CmsReserveAct {
    private static final Logger log = LoggerFactory.getLogger(CmsReserveAct.class);

    @Autowired
    private CmsReserveMng manager;

    @RequiresPermissions({"reserve:v_list"})
    @RequestMapping({"/reserve/v_list.do"})
    public String list(Integer pageNo, HttpServletRequest request, ModelMap model) {
//        Pagination pagination = this.manager.getPage(SimplePage.cpn(pageNo),
//                CookieUtils.getPageSize(request));
        Pagination pagination = manager.getPage(cpn(pageNo), CookieUtils
                .getPageSize(request));

        model.addAttribute("pagination", pagination);
        model.addAttribute("pageNo", Integer.valueOf(pagination.getPageNo()));
        return "reserve/list";
    }

    @RequiresPermissions({"reserve:v_add"})
    @RequestMapping({"/reserve/v_add.do"})
    public String add(ModelMap model) {
        return "reserve/add";
    }

    @RequiresPermissions({"reserve:v_edit"})
    @RequestMapping({"/reserve/v_edit.do"})
    public String edit(Integer id, Integer pageNo, HttpServletRequest request, ModelMap model) {
        WebErrors errors = validateEdit(id, request);
        if (errors.hasErrors()) {
            return errors.showErrorPage(model);
        }
        model.addAttribute("reserve", this.manager.findById(id));
        model.addAttribute("pageNo", pageNo);
        return "reserve/edit";
    }

    @RequiresPermissions({"reserve:o_save"})
    @RequestMapping({"/reserve/o_save.do"})
    public String save(CmsReserve bean, HttpServletRequest request, ModelMap model) {
        WebErrors errors = validateSave(bean, request);
        if (errors.hasErrors()) {
            return errors.showErrorPage(model);
        }
        bean = this.manager.save(bean);
        log.info("save CmsReserve id={}", bean.getId());
        return "redirect:v_list.do";
    }

    @RequiresPermissions({"reserve:o_update"})
    @RequestMapping({"/reserve/o_update.do"})
    public String update(CmsReserve bean, Integer pageNo, HttpServletRequest request, ModelMap model) {
        WebErrors errors = validateUpdate(bean.getId(), request);
        if (errors.hasErrors()) {
            return errors.showErrorPage(model);
        }
        bean = this.manager.update(bean);
        log.info("update CmsReserve id={}.", bean.getId());
        return list(pageNo, request, model);
    }

    @RequiresPermissions({"reserve:o_delete"})
    @RequestMapping({"/reserve/o_delete.do"})
    public String delete(Integer[] ids, Integer pageNo, HttpServletRequest request, ModelMap model) {
        WebErrors errors = validateDelete(ids, request);
        if (errors.hasErrors()) {
            return errors.showErrorPage(model);
        }
        CmsReserve[] beans = this.manager.deleteByIds(ids);
        for (CmsReserve bean : beans) {
            log.info("delete CmsReserve id={}", bean.getId());
        }
        return list(pageNo, request, model);
    }

    private WebErrors validateSave(CmsReserve bean, HttpServletRequest request) {
        WebErrors errors = WebErrors.create(request);
        CmsSite site = CmsUtils.getSite(request);
        bean.setSite(site);
        bean.setUser(CmsUtils.getUser(request));
        return errors;
    }

    private WebErrors validateEdit(Integer id, HttpServletRequest request) {
        WebErrors errors = WebErrors.create(request);
        CmsSite site = CmsUtils.getSite(request);
        if (vldExist(id, site.getId(), errors)) {
            return errors;
        }
        return errors;
    }

    private WebErrors validateUpdate(Integer id, HttpServletRequest request) {
        WebErrors errors = WebErrors.create(request);
        CmsSite site = CmsUtils.getSite(request);
        if (vldExist(id, site.getId(), errors)) {
            return errors;
        }
        return errors;
    }

    private WebErrors validateDelete(Integer[] ids, HttpServletRequest request) {
        WebErrors errors = WebErrors.create(request);
        CmsSite site = CmsUtils.getSite(request);
        if (errors.ifEmpty(ids, "ids")) {
            return errors;
        }
        for (Integer id : ids) {
            vldExist(id, site.getId(), errors);
        }
        return errors;
    }

    private boolean vldExist(Integer id, Integer siteId, WebErrors errors) {
        if (errors.ifNull(id, "id")) {
            return true;
        }
        CmsReserve entity = this.manager.findById(id);
        if (errors.ifNotExist(entity, CmsReserve.class, id)) {
            return true;
        }
        if (!entity.getSite().getId().equals(siteId)) {
            errors.notInSite(CmsReserve.class, id);
            return true;
        }
        return false;
    }
}