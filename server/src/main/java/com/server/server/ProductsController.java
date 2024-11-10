package com.server.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.server.server.model.Products;
import com.server.server.repo.Productrepo;

@RestController
public class ProductsController {
    @Autowired
    Productrepo repo;

    @PostMapping("/addproduct")
    public void addProduct(@RequestBody Products product) {
        repo.save(product);
    }


}
