package com.nos.cms.dao.main.impl;

import org.springframework.stereotype.Repository;

import com.nos.cms.dao.main.ChannelExtDao;
import com.nos.cms.entity.main.ChannelExt;
import com.nos.common.hibernate3.HibernateBaseDao;

@Repository
public class ChannelExtDaoImpl extends HibernateBaseDao<ChannelExt, Integer>
		implements ChannelExtDao {
	public ChannelExt save(ChannelExt bean) {
		getSession().save(bean);
		return bean;
	}

	@Override
	protected Class<ChannelExt> getEntityClass() {
		return ChannelExt.class;
	}
}