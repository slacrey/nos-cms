package com.nos.core.dao.impl;

import org.springframework.stereotype.Repository;

import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.core.dao.CmsUserResumeDao;
import com.nos.core.entity.CmsUserResume;

@Repository
public class CmsUserResumeDaoImpl extends HibernateBaseDao<CmsUserResume, Integer> implements CmsUserResumeDao {
	public CmsUserResume findById(Integer id) {
        return get(id);
	}

	public CmsUserResume save(CmsUserResume bean) {
		getSession().save(bean);
		return bean;
	}
	
	@Override
	protected Class<CmsUserResume> getEntityClass() {
		return CmsUserResume.class;
	}
}