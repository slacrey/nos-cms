package com.nos.plug.reserve.entity.base;

import com.nos.core.entity.CmsSite;
import com.nos.core.entity.CmsUser;
import com.nos.plug.reserve.entity.CmsReserve;

import java.io.Serializable;
import java.util.Date;

public abstract class BaseCmsReserve implements Serializable {

    public static String REF = "CmsReserve";
    public static String PROP_USER = "user";
    public static String PROP_DESCRIPTION = "description";
    public static String PROP_SITE = "site";
    public static String PROP_ID = "id";
    public static String PROP_NAME = "name";
    public static String PROP_PHONE = "phone";
    public static String PROP_CREATE_TIME = "createTime";
    public static String PROP_IP = "ip";

    private int hashCode = -2147483648;
    private Integer id;
    private String name;
    private String phone;
    private String description;
    private java.lang.String ip;
    private java.util.Date createTime;
    private CmsSite site;
    private CmsUser user;

    public BaseCmsReserve() {
        initialize();
    }

    public BaseCmsReserve(Integer id) {
        setId(id);
        initialize();
    }

    public BaseCmsReserve(Integer id, CmsSite site) {
        setId(id);
        setSite(site);
        initialize();
    }

    protected void initialize() {
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
        this.hashCode = -2147483648;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public CmsSite getSite() {
        return this.site;
    }

    public void setSite(CmsSite site) {
        this.site = site;
    }

    public CmsUser getUser() {
        return this.user;
    }

    public void setUser(CmsUser user) {
        this.user = user;
    }

    public boolean equals(Object obj) {
        if (obj == null) return false;
        if (!(obj instanceof CmsReserve)) return false;

        CmsReserve cmsTest = (CmsReserve) obj;
        if ((getId() == null) || (cmsTest.getId() == null)) return false;
        return getId().equals(cmsTest.getId());
    }

    public int hashCode() {
        if (-2147483648 == this.hashCode) {
            if (getId() == null) return super.hashCode();

            String hashStr = getClass().getName() + ":" + getId().hashCode();
            this.hashCode = hashStr.hashCode();
        }

        return this.hashCode;
    }

    public String toString() {
        return super.toString();
    }
}