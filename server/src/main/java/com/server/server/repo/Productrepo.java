package com.server.server.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.server.server.model.Products;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface Productrepo extends JpaRepository<Products, Long> {

}
