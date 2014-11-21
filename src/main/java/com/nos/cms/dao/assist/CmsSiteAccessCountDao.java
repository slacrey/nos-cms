package com.nos.cms.dao.assist;

import java.util.Date;
import java.util.List;

import com.nos.cms.entity.assist.CmsSiteAccessCount;
import com.nos.common.hibernate3.Updater;

/**
 * @author slacrey
 */
public interface CmsSiteAccessCountDao {

	public List<Object[]> statisticVisitorCountByDate(Integer siteId,Date begin,Date end);
	
	public List<Object[]> statisticVisitorCountByYear(Integer siteId,Integer year);

	public CmsSiteAccessCount save(CmsSiteAccessCount count);

	public CmsSiteAccessCount updateByUpdater(Updater<CmsSiteAccessCount> updater);

}
