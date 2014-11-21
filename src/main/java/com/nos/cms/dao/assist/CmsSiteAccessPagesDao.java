package com.nos.cms.dao.assist;

import java.util.Date;

import com.nos.cms.entity.assist.CmsSiteAccessPages;
import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;

/**
 * @author slacrey
 */
public interface CmsSiteAccessPagesDao {

	public CmsSiteAccessPages findAccessPage(String sessionId, Integer pageIndex);
	
	public Pagination findPages(Integer siteId,Integer orderBy,Integer pageNo,Integer pageSize);

	public CmsSiteAccessPages save(CmsSiteAccessPages access);

	public CmsSiteAccessPages updateByUpdater(Updater<CmsSiteAccessPages> updater);

	public void clearByDate(Date date);

}
