package com.nos.core.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.core.dao.CmsConfigItemDao;
import com.nos.core.entity.CmsConfigItem;

@Repository
public class CmsConfigItemDaoImpl extends
		HibernateBaseDao<CmsConfigItem, Integer> implements CmsConfigItemDao {
	@SuppressWarnings("unchecked")
	public List<CmsConfigItem> getList(Integer configId,Integer category) {
        return find("from CmsConfigItem bean where bean.config.id=? and bean.category=?" + " order by bean.priority asc,bean.id asc",configId,category);
	}

	public CmsConfigItem findById(Integer id) {
        return get(id);
	}

	public CmsConfigItem save(CmsConfigItem bean) {
		getSession().save(bean);
		return bean;
	}

	public CmsConfigItem deleteById(Integer id) {
		CmsConfigItem entity = super.get(id);
		if (entity != null) {
			getSession().delete(entity);
		}
		return entity;
	}

	@Override
	protected Class<CmsConfigItem> getEntityClass() {
		return CmsConfigItem.class;
	}
}