package com.nos.cms.dao.main.impl;

import org.springframework.stereotype.Repository;

import com.nos.cms.dao.main.ContentCheckDao;
import com.nos.cms.entity.main.ContentCheck;
import com.nos.common.hibernate3.HibernateBaseDao;

@Repository
public class ContentCheckDaoImpl extends HibernateBaseDao<ContentCheck, Long>
		implements ContentCheckDao {
	public ContentCheck findById(Long id) {
		ContentCheck entity = get(id);
		return entity;
	}

	public ContentCheck save(ContentCheck bean) {
		getSession().save(bean);
		return bean;
	}

	@Override
	protected Class<ContentCheck> getEntityClass() {
		return ContentCheck.class;
	}
}