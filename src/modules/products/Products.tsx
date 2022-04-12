import { Component } from "react";
import Wrapper from "../../components/Wrapper";

class Product extends Component {
    render() { 
        return (
            <Wrapper>
                <div className="table w-full p-10 shadow-md bg-white shadow-gray-300">
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-200 border-b text-gray-900">
                                
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-900">
                                    <div className="flex items-center justify-center">
                                        #
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-900">
                                    <div className="flex items-center justify-center">
                                        Serial Number
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-900">
                                    <div className="flex items-center justify-center">
                                        Product Name
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-900">
                                    <div className="flex items-center justify-center">
                                        Image
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-900">
                                    <div className="flex items-center justify-center">
                                        Price
                                    </div>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-900">
                                    <div className="flex items-center justify-center">
                                        Action
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center border-b text-sm text-gray-600">
                                
                                <td className="p-2 border-r">1</td>
                                <td className="p-2 border-r">SN-33MJ3HH4BN1</td>
                                <td className="p-2 border-r">John Doe</td>
                                <td className="p-2 border-r">john@gmail.com</td>
                                <td className="p-2 border-r">Sydney, Australia</td>
                                <td>
                                    <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                    <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Delete</a>
                                </td>
                            </tr>
                            <tr className="text-center border-b text-sm text-gray-600">
                                
                                <td className="p-2 border-r">2</td>
                                <td className="p-2 border-r">SN-33MJ3HH4BN1</td>
                                <td className="p-2 border-r">Adam Smith</td>
                                <td className="p-2 border-r">adam@gmail.com</td>
                                <td className="p-2 border-r">Sydney, Australia</td>
                                <td>
                                    <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                    <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Delete</a>
                                </td>
                            </tr>
                            <tr className="text-center border-b text-sm text-gray-600">
                            
                                <td className="p-2 border-r">3</td>
                                <td className="p-2 border-r">SN-33MJ3HH4BN1</td>
                                <td className="p-2 border-r">Jean Doe</td>
                                <td className="p-2 border-r">jean@gmail.com</td>
                                <td className="p-2 border-r">Sydney, Australia</td>
                                <td>
                                    <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                    <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Delete</a>
                                </td>
                            </tr>
                            <tr className="text-center border-b text-sm text-gray-600">
                                
                                <td className="p-2 border-r">4</td>
                                <td className="p-2 border-r">SN-33MJ3HH4BN1</td>
                                <td className="p-2 border-r">Jean Doe</td>
                                <td className="p-2 border-r">jean@gmail.com</td>
                                <td className="p-2 border-r">Sydney, Australia</td>
                                <td>
                                    <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                    <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Delete</a>
                                </td>
                            </tr>
                            <tr className="text-center border-b text-sm text-gray-600">
                                
                                <td className="p-2 border-r">5</td>
                                <td className="p-2 border-r">SN-33MJ3HH4BN1</td>
                                <td className="p-2 border-r">Jean Doe</td>
                                <td className="p-2 border-r">jean@gmail.com</td>
                                <td className="p-2 border-r">Sydney, Australia</td>
                                <td>
                                    <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                    <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Wrapper>
         );
    }
}
 
export default Product;