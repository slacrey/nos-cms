package com.jeecms.common.web.session.id;

import org.apache.commons.lang.StringUtils;

/**
 * 通过UUID生成SESSION ID
 */
public class JugUUIDGenerator implements SessionIdGenerator {
	public String get() {
		String uuid = java.util.UUID.randomUUID().toString();
		return StringUtils.remove(uuid.toString(), '-');
	}
}
