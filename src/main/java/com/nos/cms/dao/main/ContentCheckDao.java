package com.nos.cms.dao.main;

import com.nos.cms.entity.main.ContentCheck;
import com.nos.common.hibernate3.Updater;

public interface ContentCheckDao {
	public ContentCheck findById(Long id);

	public ContentCheck save(ContentCheck bean);

	public ContentCheck updateByUpdater(Updater<ContentCheck> updater);
}