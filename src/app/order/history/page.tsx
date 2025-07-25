"use client";
import { getOrder } from "@/actions/makeOrder";
import { Button } from "@/components/ui/button";
import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ListFilter } from "lucide-react";
import OrderCard from "@/components/order/OrderCard";
import OrderSkelaton from "@/components/order/OrderSkelaton";

const OrderHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [picked, setPicked] = useState(false);
  const [applyFilter, setApplyFilter] = useState(false);
  const [loading, setLoading] = useState(true)
  const fetchOrders = async (start?: Date, end?: Date) => {
    setLoading(true)
    const result = await getOrder(start, end);
    setOrders(result ?? []); //if result is undefined then take empty array
    setLoading(false)
  };

  useEffect(() => {
    // It willl load all orders by default
    fetchOrders();
  }, []);
  // Filter by today
  const filterToday = () => {
    const today = new Date();
    const start = new Date(today.setHours(0, 0, 0, 0));
    const end = new Date(today.setHours(23, 59, 59, 999));
    fetchOrders(start, end);
  };
  // Filter by this month
  const filterByThiMonth = () => {
    const now = new Date();
    // First day of month
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    // last day of month
    const end = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );
    fetchOrders(start, end);
  };
  // Filter by last 7 days
  const filterBy7Days = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 6);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    fetchOrders(start, end);
  };
  // CustomDateHandler
  const customDateHandler = () => {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    fetchOrders(start, end);
  };
  return (
    <div className="mx-2 sm:mx-8">
      <h1 className="text-3xl text-slate-800 font-bold my-6 mb-2 ">
        My Orders
      </h1>
      <div className="flex gap-4">
        {/* Filter component for desktop */}
        <div className="hidden sm:flex flex-col w-[400px]">
          <div className="flex flex-col gap-2 border  my-4 bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50  p-4 rounded-sm">
            <Button
              onClick={filterToday}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
            >
              Filter By Today
            </Button>
            <Button
              onClick={filterBy7Days}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
            >
              Filter By This Weak
            </Button>
            <Button
              onClick={filterByThiMonth}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
            >
              Filter By This Month
            </Button>
            <Button
              className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
              onClick={() => {
                setPicked(!picked);
                customDateHandler();
              }}
            >
              Pick a Date
            </Button>
            {picked && (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="flex flex-col gap-2"
              >
                <div className="flex gap-2">
                  <label htmlFor="start" className="font-semibold text-lg">
                    Start :{" "}
                  </label>
                  <input
                    type="date"
                    id="start"
                    className="border px-2 py-1 rounded border-green-500 text-gray-700"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="end" className="font-semibold text-lg mr-2">
                    End :
                  </label>
                  <input
                    type="date"
                    id="end"
                    className="border px-2 py-1 rounded border-green-500 text-gray-700"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <Button
                  onClick={customDateHandler}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Apply Filter
                </Button>
              </motion.div>
            )}
          </div>
        </div>
        {/* Order history */}
        <div className="w-full overflow-y-hidden">
          <Button
            onClick={() => setApplyFilter(!applyFilter)}
            className="flex sm:hidden bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ListFilter /> Apply Filter
          </Button>
          {applyFilter && (
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="sm:hidden flex flex-col w-full p-2 overflow-y-hidden"
            >
              <div className="flex flex-col gap-2 border  my-4 bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50  p-4 rounded-sm">
                <Button
                  onClick={filterToday}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Filter By Today
                </Button>
                <Button
                  onClick={filterBy7Days}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Filter By This Weak
                </Button>
                <Button
                  onClick={filterByThiMonth}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Filter By This Month
                </Button>
                <Button
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setPicked(!picked);
                    customDateHandler();
                  }}
                >
                  Pick a Date
                </Button>
                {picked && (
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    transition={{ duration: 0.7 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex gap-2">
                      <label htmlFor="start" className="font-semibold text-lg">
                        Start :{" "}
                      </label>
                      <input
                        type="date"
                        id="start"
                        className="border px-2 py-1 rounded border-green-500 text-gray-700"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <label
                        htmlFor="end"
                        className="font-semibold text-lg mr-2"
                      >
                        End :
                      </label>
                      <input
                        type="date"
                        id="end"
                        className="border px-2 py-1 rounded border-green-500 text-gray-700"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={customDateHandler}
                      className="bg-gradient-to-r from-green-400 to-green-600 text-white/90 hover:from-green-500 hover:to-green-700 py-4 rounded-full hover:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      Apply Filter
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
          {
            loading ? <OrderSkelaton /> : <OrderCard orders={orders} />
          }
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
