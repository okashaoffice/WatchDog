import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const TablePagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderTableData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end).map((row) => (
      <tr className="border-b border-[#898787]">
        <td className="whitespace-nowrap px-4 py-4  trrgbcolor">
          <div className="flex items-center gap-x-4">
            <div className=" flex items-center gap-x-1">
              <div className="text-md  text-white">{row.hash}</div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-12 py-4 text-center">
          <div className="text-md text-white">{row.data}</div>
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-center">
          <span className="  text-md text-white   ">{row.from}</span>
        </td>
        <td className="whitespace-nowrap px-4  text-md text-white text-center">
          {row.to}
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-md text-center text-white trrgbcolor">
          {row.tokenId}
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-md text-center text-white ">
          {row.pl}
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-md text-center text-white ">
          {row.type}
        </td>
      </tr>
    ));
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="  w-full bg-[#333639] p-4 rounded-2xl TransactionFont mob:overflow-scroll">
      <div className=" pl-2 pr-8">
        <h1 className="text-3xl font-bold text-white mob:pl-2">
          NFT Transactions
        </h1>
      </div>
      <div className="flex flex-wrap pt-10 ">
        <table>
          <thead>
            <tr className="bg-[#FFFFFF0F]">
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
              >
                <span className="text-white  text-xl">TxnHash</span>
              </th>
              <th
                scope="col"
                className="px-12 py-3.5 text-center text-white font-normal text-xl"
              >
                Date
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-center text-white font-normal  text-xl"
              >
                From
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-center text-white font-normal  text-xl"
              >
                To
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-center text-white font-normal  text-xl"
              >
                TokenID
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-center text-white  font-normal text-xl"
              >
                Profit/Loss
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-center text-white font-normal  text-xl"
              >
                Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y  bg-[#333639] overflow-y-scroll h-[50vh]">
            {renderTableData()}
          </tbody>
        </table>
      </div>
      <div className="flex gap-x-3 mob:gap-x-2 justify-end pr-10 mob:pr-0 pt-24">
        <button className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-xs mob:px-4 ">
          First
        </button>
        <button className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-md items-center text-center flex justify-center">
          <IoIosArrowBack
            className="text-sm "
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </button>
        <button className="text-white h-[39px] w-[140px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-sm ">
          {renderPagination()}
        </button>
        <button className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-md flex justify-center items-center">
          <IoIosArrowForward
            className="text-sm"
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </button>
        <button className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-xs mob:px-4">
          Last
        </button>
      </div>
    </div>
  );
};

// Usage
const Transaction = () => {
  const people = [
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
  ];

  const itemsPerPage = 10;

  return <TablePagination data={people} itemsPerPage={itemsPerPage} />;
};

export default Transaction;
