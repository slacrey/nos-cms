package com.nos.core.dao.impl;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.nos.common.hibernate3.Finder;
import com.nos.common.hibernate3.HibernateBaseDao;
import com.nos.common.page.Pagination;
import com.nos.core.dao.CmsDictionaryDao;
import com.nos.core.entity.CmsDictionary;

@Repository
public class CmsDictionaryDaoImpl extends HibernateBaseDao<CmsDictionary, Integer> implements CmsDictionaryDao {
	public Pagination getPage(String queryType,int pageNo, int pageSize) {
		Criteria crit = createCriteria();
		if(StringUtils.isNotBlank(queryType)){
			Criterion cron = Restrictions.like("type",queryType);
			crit.add(cron);
		}
        return findByCriteria(crit, pageNo, pageSize);
	}
	
	@SuppressWarnings("unchecked")
	public List<CmsDictionary> getList(String type){
		Criterion cron = Restrictions.like("type",type); 
		return findByCriteria(cron);
	}
	
	@SuppressWarnings("unchecked")
	public List<String> getTypeList(){
		Finder f=Finder.create("select  type from CmsDictionary dic group by type ");
		return find(f);
	}

	public CmsDictionary findById(Integer id) {
        return get(id);
	}
	
	@SuppressWarnings("unchecked")
	public CmsDictionary findByValue(String type,String value){
		Criterion cron_type=null,cron_value=null;
		if(StringUtils.isNotBlank(type)){
			cron_type = Restrictions.like("type",type);
		}
		if(StringUtils.isNotBlank(value)){
			cron_value = Restrictions.like("value",value);
		}
		List<CmsDictionary>li=findByCriteria(cron_type,cron_value);
		if(li!=null&&li.size()>0){
			return li.get(0);
		}else{
			return null;
		}
	}

	public CmsDictionary save(CmsDictionary bean) {
		getSession().save(bean);
		return bean;
	}

	public CmsDictionary deleteById(Integer id) {
		CmsDictionary entity = super.get(id);
		if (entity != null) {
			getSession().delete(entity);
		}
		return entity;
	}
	
	public int countByValue(String value, String type) {
		@SuppressWarnings("JpaQlInspection")
        String hql = "select count(*) from CmsDictionary bean where bean.value=:value and bean.type=:type";
		Query query = getSession().createQuery(hql);
		query.setParameter("value", value);
		query.setParameter("type", type);
		return ((Number) query.iterate().next()).intValue();
	}
	
	@Override
	protected Class<CmsDictionary> getEntityClass() {
		return CmsDictionary.class;
	}
}