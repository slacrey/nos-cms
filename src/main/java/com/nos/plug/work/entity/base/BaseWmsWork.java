package com.nos.plug.work.entity.base;

import com.nos.plug.reserve.entity.CmsReserve;
import com.nos.plug.work.entity.WmsWorkProgress;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public abstract class BaseWmsWork implements Serializable {

    public static String REF = "WmsWork";
    public static String PROP_USER = "user";
    public static String PROP_DESCRIPTION = "description";
    public static String PROP_SITE = "site";
    public static String PROP_ID = "id";
    public static String PROP_LITIGANT = "litigant";
    public static String PROP_LITIGANT_PHONE = "litigantPhone";
    public static String PROP_LITIGANT_ID = "litigantId";
    public static String PROP_TITLE = "title";
    public static String PROP_STATUS = "status";
    public static String PROP_PRINCIPAL_ID = "principalId";
    public static String PROP_CONTENT = "content";
    public static String PROP_URL = "url";
    public static String PROP_SUBMITTER_ID = "submitterId";
    public static String PROP_ASSIGN_TIME = "assignTime";
    public static String PROP_WORK_TYPE = "workType";
    public static String PROP_LEADER_SPEECH = "leaderSpeech";
    public static String PROP_ASSIGN_DEPARTMENT_ID = "assignDepartmentId";
    public static String PROP_ASSIGN_DEPARTMENT_NAME = "assignDepartmentName";
    public static String PROP_UNDERTAKE_DEPARTMENT_ID = "undertakeDepartmentId";
    public static String PROP_UNDERTAKE_DEPARTMENT_NAME = "undertakeDepartmentName";
    public static String PROP_COMPLETE_DATE = "completeDate";
    public static String PROP_COMPLETE_BY = "completeBy";
    public static String PROP_REMARKS = "remarks";
    public static String PROP_CREATE_BY = "createBy";
    public static String PROP_CREATE_DATE = "createDate";
    public static String PROP_UPDATE_BY = "updateBy";
    public static String PROP_UPDATE_DATE = "updateDate";
    public static String PROP_DEL_FLAG = "delFlag";

    private int hashCode = -2147413648;

    private Long id;//编号
    private String litigant;//当事人
    private String litigantPhone;//当事人
    private String litigantId;//当事人
    private String title;//工作标题
    private Integer status;//状态
    private Long principalId;//负责人
    private String content;//内容简介
    private String url;//附件
    private Long submitterId;//提交人
    private Date assignTime;//交办时间
    private Integer workType;//工作类型（1：村街工作；2：部门工作；3：重点工作....）
    private String leaderSpeech;//领导批示

    //交办部门
    private Long assignDepartmentId;
    private String assignDepartmentName;

    //承办部门
    private Long undertakeDepartmentId;
    private String undertakeDepartmentName;

    private Date completeDate;//完成时间
    private Long completeBy;//完成人

    protected String remarks;	// 备注
    protected Long createBy;	// 创建者
    protected Date createDate;// 创建日期
    protected Long updateBy;	// 更新者
    protected Date updateDate;// 更新日期
    protected String delFlag; // 删除标记（0：正常；1：删除；2：审核）

    protected List<WmsWorkProgress> workProgresses;

    public BaseWmsWork() {
        initialize();
    }

    public BaseWmsWork(Long id) {
        setId(id);
        initialize();
    }

    protected void initialize() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
        this.hashCode = -2147413648;
    }

    public String getLitigant() {
        return litigant;
    }

    public void setLitigant(String litigant) {
        this.litigant = litigant;
    }

    public String getLitigantPhone() {
        return litigantPhone;
    }

    public void setLitigantPhone(String litigantPhone) {
        this.litigantPhone = litigantPhone;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Long getPrincipalId() {
        return principalId;
    }

    public void setPrincipalId(Long principalId) {
        this.principalId = principalId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getSubmitterId() {
        return submitterId;
    }

    public void setSubmitterId(Long submitterId) {
        this.submitterId = submitterId;
    }

    public Date getAssignTime() {
        return assignTime;
    }

    public void setAssignTime(Date assignTime) {
        this.assignTime = assignTime;
    }

    public Integer getWorkType() {
        return workType;
    }

    public void setWorkType(Integer workType) {
        this.workType = workType;
    }

    public String getLeaderSpeech() {
        return leaderSpeech;
    }

    public void setLeaderSpeech(String leaderSpeech) {
        this.leaderSpeech = leaderSpeech;
    }

    public Long getAssignDepartmentId() {
        return assignDepartmentId;
    }

    public void setAssignDepartmentId(Long assignDepartmentId) {
        this.assignDepartmentId = assignDepartmentId;
    }

    public String getAssignDepartmentName() {
        return assignDepartmentName;
    }

    public void setAssignDepartmentName(String assignDepartmentName) {
        this.assignDepartmentName = assignDepartmentName;
    }

    public Long getUndertakeDepartmentId() {
        return undertakeDepartmentId;
    }

    public void setUndertakeDepartmentId(Long undertakeDepartmentId) {
        this.undertakeDepartmentId = undertakeDepartmentId;
    }

    public String getUndertakeDepartmentName() {
        return undertakeDepartmentName;
    }

    public void setUndertakeDepartmentName(String undertakeDepartmentName) {
        this.undertakeDepartmentName = undertakeDepartmentName;
    }

    public Date getCompleteDate() {
        return completeDate;
    }

    public void setCompleteDate(Date completeDate) {
        this.completeDate = completeDate;
    }

    public Long getCompleteBy() {
        return completeBy;
    }

    public void setCompleteBy(Long completeBy) {
        this.completeBy = completeBy;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Long getCreateBy() {
        return createBy;
    }

    public void setCreateBy(Long createBy) {
        this.createBy = createBy;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Long getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(Long updateBy) {
        this.updateBy = updateBy;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(String delFlag) {
        this.delFlag = delFlag;
    }

    public List<WmsWorkProgress> getWorkProgresses() {
        return workProgresses;
    }

    public void setWorkProgresses(List<WmsWorkProgress> workProgresses) {
        this.workProgresses = workProgresses;
    }

    public String getLitigantId() {
        return litigantId;
    }

    public void setLitigantId(String litigantId) {
        this.litigantId = litigantId;
    }

    public boolean equals(Object obj) {
        if (obj == null) return false;
        if (!(obj instanceof CmsReserve)) return false;

        CmsReserve cmsTest = (CmsReserve) obj;
        if ((getId() == null) || (cmsTest.getId() == null)) return false;
        return getId().equals(cmsTest.getId());
    }

    public int hashCode() {
        if (-2147413648 == this.hashCode) {
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