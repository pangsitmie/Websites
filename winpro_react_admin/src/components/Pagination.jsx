import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Pagination = ({ totalPages, limit, offset, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(Math.ceil(offset / limit) + 1)
    }, [offset, limit])

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const newOffset = (newPage - 1) * limit;
        onPageChange({ limit, offset: newOffset });
    }

    return (
        <Box>
            <Button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                variant="contained"
                sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #fefefe" }}>
                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                    Previous
                </Typography>
            </Button>

            <span>{currentPage}</span>

            <Button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                variant="contained"
                sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #fefefe" }}>
                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                    Next
                </Typography>
            </Button>

        </Box>
    );
}

export default Pagination;
