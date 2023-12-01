package com.server.controller.request;

import lombok.Data;

@Data
public class AddChildrenRequest {
    private String childrenId;
    private String parentId;
}
