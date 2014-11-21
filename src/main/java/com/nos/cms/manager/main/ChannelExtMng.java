package com.nos.cms.manager.main;

import com.nos.cms.entity.main.Channel;
import com.nos.cms.entity.main.ChannelExt;

public interface ChannelExtMng {
	public ChannelExt save(ChannelExt ext, Channel channel);

	public ChannelExt update(ChannelExt ext);
}