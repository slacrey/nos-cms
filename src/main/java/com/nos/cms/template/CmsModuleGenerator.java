package com.nos.cms.template;


public class CmsModuleGenerator {
	private static String packName = "com.nos.cms.template";
	private static String fileName = "nos.properties";

	public static void main(String[] args) {
		new ModuleGenerator(packName, fileName).generate();
	}
}
