package com.nos.cms.dao.main;

import com.nos.cms.entity.main.ChannelExt;
import com.nos.common.hibernate3.Updater;

public interface ChannelExtDao {
	public ChannelExt save(ChannelExt bean);

	public ChannelExt updateByUpdater(Updater<ChannelExt> updater);
}