package com.nos.core.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.common.page.Pagination;
import com.nos.core.dao.UnifiedUserDao;
import com.nos.core.entity.UnifiedUser;

@Repository
public class UnifiedUserDaoImpl extends HibernateBaseDao<UnifiedUser, Integer>
		implements UnifiedUserDao {
	public UnifiedUser getByUsername(String username) {
		return findUniqueByProperty("username", username);
	}

	public List<UnifiedUser> getByEmail(String email) {
		return findByProperty("email", email);
	}

    @SuppressWarnings("JpaQlInspection")
	public int countByEmail(String email) {
		String hql = "select count(*) from UnifiedUser bean where bean.email=:email";
		Query query = getSession().createQuery(hql);
		query.setParameter("email", email);
		return ((Number) query.iterate().next()).intValue();
	}

	public Pagination getPage(int pageNo, int pageSize) {
		Criteria crit = createCriteria();
        return findByCriteria(crit, pageNo, pageSize);
	}

	public UnifiedUser findById(Integer id) {
        return get(id);
	}

	public UnifiedUser save(UnifiedUser bean) {
		getSession().save(bean);
		return bean;
	}

	public UnifiedUser deleteById(Integer id) {
		UnifiedUser entity = super.get(id);
		if (entity != null) {
			getSession().delete(entity);
		}
		return entity;
	}

	@Override
	protected Class<UnifiedUser> getEntityClass() {
		return UnifiedUser.class;
	}
}