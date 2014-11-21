package com.nos.cms.dao.main;

import com.nos.cms.entity.main.ContentExt;
import com.nos.common.hibernate3.Updater;

public interface ContentExtDao {
	public ContentExt findById(Integer id);

	public ContentExt save(ContentExt bean);

	public ContentExt updateByUpdater(Updater<ContentExt> updater);
}