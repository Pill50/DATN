package com.server.controller.request;

import lombok.Data;

@Data
public class AddLineRequest {
    private String childrenId;
    private String parentId;
}
