package com.nos.core.dao;

import com.nos.common.hibernate3.Updater;
import com.nos.core.entity.CmsConfig;

public interface CmsConfigDao {
	public CmsConfig findById(Integer id);

	public CmsConfig updateByUpdater(Updater<CmsConfig> updater);
}