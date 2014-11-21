package com.nos.core.manager;

import java.util.Date;

import com.nos.core.entity.CmsConfig;
import com.nos.core.entity.CmsConfigAttr;
import com.nos.core.entity.MarkConfig;
import com.nos.core.entity.MemberConfig;

public interface CmsConfigMng {
	public CmsConfig get();

	public void updateCountCopyTime(Date d);

	public void updateCountClearTime(Date d);

	public CmsConfig update(CmsConfig bean);

	public MarkConfig updateMarkConfig(MarkConfig mark);

	public void updateMemberConfig(MemberConfig memberConfig);
	
	public void updateConfigAttr(CmsConfigAttr configAttr);
}