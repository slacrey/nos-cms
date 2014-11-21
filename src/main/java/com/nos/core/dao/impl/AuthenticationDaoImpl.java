package com.nos.core.dao.impl;

import java.util.Date;

import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.common.page.Pagination;
import com.nos.core.dao.AuthenticationDao;
import com.nos.core.entity.Authentication;

@Repository
public class AuthenticationDaoImpl extends
		HibernateBaseDao<Authentication, String> implements AuthenticationDao {
	public int deleteExpire(Date d) {
		@SuppressWarnings("JpaQlInspection")
        String hql = "delete Authentication bean where bean.updateTime <= :d";
		return getSession().createQuery(hql).setTimestamp("d", d)
				.executeUpdate();
	}

	public Authentication getByUserId(Long userId) {
		String hql = "from Authentication bean where bean.uid=?";
		return (Authentication) findUnique(hql, userId);
	}

	public Pagination getPage(int pageNo, int pageSize) {
		Criteria crit = createCriteria();
        return findByCriteria(crit, pageNo, pageSize);
	}

	public Authentication findById(String id) {
        return get(id);
	}

	public Authentication save(Authentication bean) {
		getSession().save(bean);
		return bean;
	}

	public Authentication deleteById(String id) {
		Authentication entity = super.get(id);
		if (entity != null) {
			getSession().delete(entity);
		}
		return entity;
	}

	@Override
	protected Class<Authentication> getEntityClass() {
		return Authentication.class;
	}
}