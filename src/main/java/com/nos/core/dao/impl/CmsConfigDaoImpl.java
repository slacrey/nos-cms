package com.nos.core.dao.impl;

import org.springframework.stereotype.Repository;

import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.core.dao.CmsConfigDao;
import com.nos.core.entity.CmsConfig;

@Repository
public class CmsConfigDaoImpl extends HibernateBaseDao<CmsConfig, Integer>
		implements CmsConfigDao {
	public CmsConfig findById(Integer id) {
        return get(id);
	}

	@Override
	protected Class<CmsConfig> getEntityClass() {
		return CmsConfig.class;
	}
}