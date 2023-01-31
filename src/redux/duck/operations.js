import Actions from "./actions";
import { store } from "../store";

const getAllColors = async () => {
    let colorsApi = 'https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json';
    let res = await fetch(colorsApi);
    let colors = await res.json(); 
    console.log(colors);
    store.dispatch(Actions.setAllColorsAction(colors));
}

// const setSelectedProducts = (product) => {
//     const state = store.getState();
//     let newProductList = [];
//     let alreadySelected = state.selectedProducts.filter(prod => prod.id === product.id);
//     if(alreadySelected.length) {
//         newProductList = state.selectedProducts.filter(prod => prod.id !== product.id);  // For unselecting product
//     } else {
//         newProductList = [...state.selectedProducts, product];  // For selecting product
//     }

//     let totalAmount = 0;
//     newProductList.forEach(product => {
//         totalAmount = totalAmount + product.price;
//     });

//     let payload = { ...state, selectedProducts: newProductList, totalAmount: totalAmount };
//     store.dispatch(Actions.setSelectedProductsAction(payload));
// }

// const setAddress = (address) => {
//     store.dispatch(Actions.setAddressAction(address));
// }

// const setIncreaseQuantity = (product) => {
//     const state = store.getState();
//     let newTotal = state.totalAmount;
//     let newProductList = state.selectedProducts.map(prod => {
//         if(prod.id === product.id){
//             prod.quantity = prod.quantity + 1;
//             newTotal = newTotal + prod.price 
//         }
//         return prod;
//     });
//     let payload = { ...state, selectedProducts: newProductList, totalAmount: newTotal };
//     store.dispatch(Actions.setIncreaseQuantityAction(payload));
// }


export default { getAllColors };