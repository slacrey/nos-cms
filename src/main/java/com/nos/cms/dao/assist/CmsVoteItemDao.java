package com.nos.cms.dao.assist;

import com.nos.cms.entity.assist.CmsVoteItem;
import com.nos.common.hibernate3.Updater;
import com.nos.common.page.Pagination;

public interface CmsVoteItemDao {
	public Pagination getPage(int pageNo, int pageSize);

	public CmsVoteItem findById(Integer id);

	public CmsVoteItem save(CmsVoteItem bean);

	public CmsVoteItem updateByUpdater(Updater<CmsVoteItem> updater);

	public CmsVoteItem deleteById(Integer id);
}