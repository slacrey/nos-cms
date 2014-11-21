package com.nos.cms.dao.main;

import com.nos.cms.entity.main.ContentTxt;
import com.nos.common.hibernate3.Updater;

public interface ContentTxtDao {
	public ContentTxt findById(Integer id);

	public ContentTxt save(ContentTxt bean);

	public ContentTxt updateByUpdater(Updater<ContentTxt> updater);
}