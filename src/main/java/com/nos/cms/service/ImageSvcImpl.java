package com.nos.cms.service;

import com.nos.common.file.FileNameUtils;
import com.nos.common.upload.FileRepository;
import com.nos.common.upload.UploadUtils;
import com.nos.common.web.springmvc.RealPathResolver;
import com.nos.core.entity.CmsSite;
import com.nos.core.entity.Ftp;
import com.nos.core.manager.DbFileMng;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URI;

/**
 * @author slacrey
 */
public class ImageSvcImpl implements ImageSvc {

	public String crawlImg(String imgUrl,CmsSite  site) {

        CloseableHttpClient client = HttpClientBuilder.create().build();
//		HttpClient client = new DefaultHttpClient();
		String outFileName;
		String fileUrl="";
		try{
			HttpGet httpget = new HttpGet(new URI(imgUrl));
			HttpResponse response = client.execute(httpget);
			InputStream is;
			OutputStream os;
			HttpEntity entity;
			entity = response.getEntity();
			is = entity.getContent();
			String ctx = site.getContextPath();
			String ext=FileNameUtils.getFileSufix(imgUrl);
			if (site.getConfig().getUploadToDb()) {
				String dbFilePath = site.getConfig().getDbFileUri();
				fileUrl = dbFileMng.storeByExt(site.getUploadPath(), ext, is);
				// 加上访问地址
				fileUrl = ctx + dbFilePath + fileUrl;
			} else if (site.getUploadFtp() != null) {
				Ftp ftp = site.getUploadFtp();
				String ftpUrl = ftp.getUrl();
				fileUrl = ftp.storeByExt(site.getUploadPath(), ext, is);
				// 加上url前缀
				fileUrl = ftpUrl + fileUrl;
			} else {
				outFileName=UploadUtils.generateFilename(site.getUploadPath(), FileNameUtils.getFileSufix(imgUrl));
				File outFile=new File(realPathResolver.get(outFileName));
				UploadUtils.checkDirAndCreate(outFile.getParentFile());
				os = new FileOutputStream(outFile);
				IOUtils.copy(is, os);
				// 加上部署路径
				fileUrl = ctx + outFileName;
			}
		}catch (Exception ignored) {
		}
		return fileUrl;
	}

	@Autowired
	protected DbFileMng dbFileMng;
	@Autowired
	protected FileRepository fileRepository;
	@Autowired
	private RealPathResolver realPathResolver;
}
