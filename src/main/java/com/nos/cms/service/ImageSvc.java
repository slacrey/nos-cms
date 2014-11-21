package com.nos.cms.service;


import com.nos.core.entity.CmsSite;

/**
 * @author slacrey
 */
public interface ImageSvc {
	/**
	 * 抓取远程图片返回本地地址
	 * @param imgUrl 远程图片URL
	 * @return
	 */
	public String crawlImg(String imgUrl,CmsSite  site);
}
