package com.nos.plug.reserve.entity;

import com.nos.core.entity.CmsSite;
import com.nos.plug.reserve.entity.base.BaseCmsReserve;

public class CmsReserve extends BaseCmsReserve {
    private static final long serialVersionUID = 1L;

    public CmsReserve() {
    }

    public CmsReserve(Integer id) {
        super(id);
    }

    public CmsReserve(Integer id, CmsSite site) {
        super(id,
                site);
    }
}