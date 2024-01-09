import React from 'react';
import './Main.css';

const orderDetail = {
  orderID: '#281209',
  orderDate: '7 July, 2023',
  orderAmount: '₹1,278.23',
  orderFee: '₹22',
};

const orderArray = Array.from({ length: 19 }, (_, index) => ({
  ...orderDetail,
  id: index,
}));

const Main = () => {
  return (
    <div className="Main">
      <div className="Order">
        <div className="Overview">
          <span>Overview</span>
          <div className="monthView">
            <span>Last Month</span>
            <img src="/arrow.png" alt="" />
          </div>
        </div>

        <div className="Orderdesc">
          <div className="Online">
            <span>Online Orders</span>
            <span>231</span>
          </div>
          <div className="Online">
            <span>Amount Received</span>
            <span>₹23,92,312.19</span>
          </div>
        </div>
      </div>

      <div className="OrderDetail">
        <span>Transactions | This Month</span>
        <div className="OrderTable">
          <div className="TableHeader">
            <div className="HeaderShortcut">
              <div className="InputOrderID">
                <img src="/search.png" alt="" />
                <span>Search by order ID...</span>
              </div>
              <div className="TableIcon">
                <div className="Sort">
                  <span>Sort</span>
                  <img src="/Sort.png" alt="" />
                </div>
                <div className="Download">
                  <img src="/download.png" alt="" />
                </div>
              </div>
            </div>

            <div className="Column">
              <span>Order ID</span>
              <div className="OrderDate">
                <span>Order date</span>
                <img src="/55.png" alt="" />
              </div>
              <span>Order Amount</span>
              <div className="Fees">
                <span>Transaction fees</span>
                <img src="/66.png" alt="" />
              </div>
            </div>
          </div>

          {orderArray.map((item) => (
            <div className="ColumnData" key={item.id}>
              <span>{item.orderID}</span>
              <span>{item.orderDate}</span>
              <span>{item.orderAmount}</span>
              <span>{item.orderFee}</span>
            </div>
          ))}

          <div className="Pagination">
            <div className="Prev">
              <img src="/555.png" alt="" />
              <span>Previous</span>
            </div>
            <div className="Page">
              <span>1 ... 10 11 12 13 14 15 16 17 18</span>
            </div>
            <div className="Next">
              <span>Next</span>
              <img src="/666.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
