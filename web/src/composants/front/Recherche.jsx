import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const Recherche = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [material, setMaterial] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [categories, setCategories] = useState([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState('price-asc');
  
    const handleSearchTextChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const handleMaterialChange = (event) => {
      setMaterial(event.target.value);
    };
  
    const handleMinPriceChange = (event) => {
      setMinPrice(event.target.value);
    };
  
    const handleMaxPriceChange = (event) => {
      setMaxPrice(event.target.value);
    };
  
    const handleCategoriesChange = (event) => {
      const selectedCategories = Array.from(event.target.selectedOptions, (option) => option.value);
      setCategories(selectedCategories);
    };
  
    const handleInStockOnlyChange = (event) => {
      setInStockOnly(event.target.checked);
    };
  
    const handleSortByChange = (event) => {
      setSortBy(event.target.value);
    };
  
    const handleFilterClick = () => {
      setShowOptions(!showOptions);
    };
  
    const handleSearchClick = () => {
      // Perform the search and filtering based on the current state values
      // ...
    };

    const handleResetClick = () => {
      setSearchText('');
      setMaterial('');
      setMinPrice('');
      setMaxPrice('');
      setCategories([]);
      setInStockOnly(false);
      setSortBy('price-asc');
    };
    
  
    return (
      <Container className='m-5'>
        <Row>
          <Col>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Rechercher un produit..."
                value={searchText}
                onChange={handleSearchTextChange}
              />
              <Button variant="primary" onClick={handleFilterClick}>Filtrer</Button>
            </InputGroup>
          </Col>
        </Row>
        {showOptions && (
          <Row className='position-absolute start-50 w-50 filtre bg-light' >
            <Col  className='ms-auto w-50 my-2'>
              <Button className='my-2' variant="secondary" onClick={handleResetClick}>Réinitialiser</Button>
              <br />
              <Form.Label className='my-2'>Materiau</Form.Label>
              <Form.Control type="text" value={material} onChange={handleMaterialChange} />
            
              <Form.Label className='my-2'>Prix min.</Form.Label>
              <Form.Control type="number" value={minPrice} onChange={handleMinPriceChange} />
            
              <Form.Label className='my-2'>Prix max.</Form.Label>
              <Form.Control type="number" value={maxPrice} onChange={handleMaxPriceChange} />
            
              <Form.Label className='my-2'>Categories</Form.Label>
              <Form.Control as="select" multiple value={categories} onChange={handleCategoriesChange}>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Form.Control>
            
              <Form.Check className='my-2'type="checkbox" label="Only show products in stock" checked={inStockOnly} onChange={handleInStockOnlyChange} />
              <Form.Label className='my-2'>Trier par</Form.Label>
              <Form.Control as="select" value={sortBy} onChange={handleSortByChange}>
                <option value="price-asc">Prix min. au max.</option>
                <option value="price-desc">Prix max. au min.</option>
                <option value="date-asc">Le plus récent</option>
                <option value="date-desc">Le plus ancien </option>
                </Form.Control>
                </Col>
                </Row>
                )}
                <Row className='my-3 text-center'>
                <Col>
                <Button variant="primary" onClick={handleSearchClick}>Rechercher</Button>
                </Col>
                </Row>
                <Row className='mt-5' >
  <Col md={4} >
    <div className="card mb-4 shadow-sm">
      <img src="https://via.placeholder.com/300x200.png" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">Product 1</h5>
        <p className="card-text">Description of product 1.</p>
        <p className="card-text">Material: Material 1</p>
        <p className="card-text">Price: $100</p>
        <p className="card-text"><small className="text-muted">In stock</small></p>
      </div>
    </div>
  </Col>
  <Col md={4}>
    <div className="card mb-4 shadow-sm">
      <img src="https://via.placeholder.com/300x200.png" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <p className="card-text">Description of product 2.</p>
        <p className="card-text">Material: Material 2</p>
        <p className="card-text">Price: $200</p>
        <p className="card-text"><small className="text-muted">Out of stock</small></p>
      </div>
    </div>
  </Col>
  <Col md={4}>
    <div className="card mb-4 shadow-sm">
      <img src="https://via.placeholder.com/300x200.png" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">Product 3</h5>
        <p className="card-text">Description of product 3.</p>
        <p className="card-text">Material: Material 3</p>
        <p className="card-text">Price: $300</p>
        <p className="card-text"><small className="text-muted">In stock</small></p>
      </div>
    </div>
  </Col>
</Row>

                </Container>
    );
}
 
export default Recherche;