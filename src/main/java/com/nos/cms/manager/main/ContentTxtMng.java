package com.nos.cms.manager.main;

import com.nos.cms.entity.main.Content;
import com.nos.cms.entity.main.ContentTxt;

public interface ContentTxtMng {
	public ContentTxt save(ContentTxt txt, Content content);

	public ContentTxt update(ContentTxt txt, Content content);
}