package com.nos.cms.manager.assist;

import com.nos.cms.entity.assist.CmsGuestbook;
import com.nos.cms.entity.assist.CmsGuestbookExt;

public interface CmsGuestbookExtMng {
	public CmsGuestbookExt save(CmsGuestbookExt ext, CmsGuestbook guestbook);

	public CmsGuestbookExt update(CmsGuestbookExt ext);
}