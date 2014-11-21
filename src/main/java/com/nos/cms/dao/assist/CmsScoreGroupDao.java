package com.nos.cms.dao.assist;

import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;
import com.nos.cms.entity.assist.CmsScoreGroup;

public interface CmsScoreGroupDao {
	public Pagination getPage(int pageNo, int pageSize);

	public CmsScoreGroup findById(Integer id);
	
	public CmsScoreGroup findDefault(Integer siteId);

	public CmsScoreGroup save(CmsScoreGroup bean);

	public CmsScoreGroup updateByUpdater(Updater<CmsScoreGroup> updater);

	public CmsScoreGroup deleteById(Integer id);
}