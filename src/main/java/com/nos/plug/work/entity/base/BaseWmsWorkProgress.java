package com.nos.plug.work.entity.base;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nos.plug.work.entity.WmsWorkProgress;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by slacrey on 2015/2/2.
 *
 * @author slacrey
 */
public abstract class BaseWmsWorkProgress implements Serializable {

    public static String REF = "WmsWorkProgress";

    public static String PROP_ID = "id";
    public static String PROP_ADD_DATE = "addDate";
    public static String PROP_PROGRESS_IMG = "progressImg";
    public static String PROP_CONTENT = "content";
    public static String PROP_FK_WORK_ID = "fkWorkId";
    public static String PROP_REMARKS = "remarks";
    public static String PROP_CREATE_BY = "createBy";
    public static String PROP_CREATE_DATE = "createDate";
    public static String PROP_UPDATE_BY = "updateBy";
    public static String PROP_UPDATE_DATE = "updateDate";
    public static String PROP_DEL_FLAG = "delFlag";

    private int hashCode = -2147413348;

    private Long id;//编号
    private Date addDate;//日期
    private String progressImg;//附件
    private String content;//督办内容
    private Long fkWorkId;

    protected String remarks;	// 备注
    protected Long createBy;	// 创建者
    protected Date createDate;// 创建日期
    protected Long updateBy;	// 更新者
    protected Date updateDate;// 更新日期
    protected String delFlag; // 删除标记（0：正常；1：删除；2：审核）

    public BaseWmsWorkProgress() {
        initialize();
    }

    public BaseWmsWorkProgress(Long id) {
        setId(id);
        initialize();
    }

    protected void initialize() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
        this.hashCode = -2147413348;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    public Date getAddDate() {
        return addDate;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    public String getProgressImg() {
        return progressImg;
    }

    public void setProgressImg(String progressImg) {
        this.progressImg = progressImg;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getFkWorkId() {
        return fkWorkId;
    }

    public void setFkWorkId(Long fkWorkId) {
        this.fkWorkId = fkWorkId;
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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
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

    public boolean equals(Object obj) {
        if (obj == null) return false;
        if (!(obj instanceof WmsWorkProgress)) return false;

        WmsWorkProgress cmsTest = (WmsWorkProgress) obj;
        if ((getId() == null) || (cmsTest.getId() == null)) return false;
        return getId().equals(cmsTest.getId());
    }

    public int hashCode() {
        if (-2147413348 == this.hashCode) {
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
