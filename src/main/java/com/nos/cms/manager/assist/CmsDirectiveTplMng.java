package com.nos.cms.manager.assist;

import java.util.List;

import com.nos.common.page.Pagination;
import com.nos.cms.entity.assist.CmsDirectiveTpl;

public interface CmsDirectiveTplMng {
	public Pagination getPage(int pageNo, int pageSize);
	
	public List<CmsDirectiveTpl> getList(int count);

	public CmsDirectiveTpl findById(Integer id);

	public CmsDirectiveTpl save(CmsDirectiveTpl bean);

	public CmsDirectiveTpl update(CmsDirectiveTpl bean);

	public CmsDirectiveTpl deleteById(Integer id);
	
	public CmsDirectiveTpl[] deleteByIds(Integer[] ids);
}