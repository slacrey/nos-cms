package com.nos.cms.manager.assist;

import java.util.Date;

import com.nos.cms.entity.assist.CmsSiteAccessPages;
import com.nos.common.page.Pagination;

/**
 * @author slacrey
 */
public interface CmsSiteAccessPagesMng {

	public CmsSiteAccessPages save(CmsSiteAccessPages access);
	
	public CmsSiteAccessPages update(CmsSiteAccessPages access);

	public CmsSiteAccessPages findAccessPage(String sessionId, Integer pageIndex);
	
	public Pagination findPages(Integer siteId,Integer orderBy,Integer pageNo,Integer pageSize);

	public void clearByDate(Date date);
}
