import { React, Fragment, useEffect, useMemo, useState } from 'react';
import MobileCard from './MobileCard/MobileCard';
import TabletTab from './TabletTab/TabletTab';
import Media from 'react-media';
import { ButtonCircle } from 'components/ButtonCircle/ButtonCircle';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { AiOutlinePlus } from "react-icons/ai";

import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/transactions/transactions-operation';
import { getTransactions } from 'redux/transactions/transactions-selector';
import { isAddModalOpen } from 'redux/modal/modal-sclice';
import { addModalOpen } from 'redux/modal/modal-selector';
import { COLUMNS } from './columns';
import { Pagination } from '@mui/material';
import styled from 'styled-components';
import baseVars from 'stylesheet/vars';

const HomeTab = () => {
  const [page, setPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  const columns = useMemo(() => COLUMNS, []);
  const { result: data, transactionsTotalQuantity } =
    useSelector(getTransactions);

  const dispatch = useDispatch();

  const isModalOpen = useSelector(addModalOpen);

  const onModal = () => {
    dispatch(isAddModalOpen(!isModalOpen));
  };

  useEffect(() => {
    // console.log(page + "!!!")
    dispatch(fetchTransactions(page));
  }, [dispatch, page]);

  const handleChange = (e, page) => {
    setPage(page);
  };
  const totalPages = Math.ceil(transactionsTotalQuantity / transactionsPerPage);
  const totalPagesInteger = totalPages ? totalPages : 1;

  return (  
    <Wrapper>
      <Container>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1279px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && <MobileCard items={data} columns={columns} />}
              {matches.medium && <TabletTab items={data} columns={columns} />}
              {matches.large && <TabletTab items={data} columns={columns} />}
              {transactionsTotalQuantity > 10 ? (
                <Paginate
                  count={totalPagesInteger}
                  page={page}
                  onChange={handleChange}
                />
              ) : null}
            </Fragment>
          )}
        </Media>
      </Container>
      <ButtonCircle onClick={onModal}><AiOutlinePlus /></ButtonCircle>
        {isModalOpen && (
          <ModalAddTransaction toggleModal={onModal} isOpen={isModalOpen} />
        )}
    </Wrapper>
  );
};

export default HomeTab;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 128px);

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    height: auto;
  }

  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    padding-top: 46px;
    align-items: flex-end;
  }
`;

const Paginate = styled(Pagination)`
  position: absolute;
  bottom: 20px;
  left: 140px;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6px 0;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 0px 6px 15px rgba(204, 204, 204, 0.5);

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    left: 276px;
    transform: translateX(0);
    width: auto;
    background-color: none;
  }
  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    
  }

  /* ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: 'red';

  } */
`;
