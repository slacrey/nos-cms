package com.nos.cms.manager.main;

import com.nos.cms.entity.main.Content;
import com.nos.cms.entity.main.ContentExt;

public interface ContentExtMng {
	public ContentExt save(ContentExt ext, Content content);

	public ContentExt update(ContentExt ext);
}