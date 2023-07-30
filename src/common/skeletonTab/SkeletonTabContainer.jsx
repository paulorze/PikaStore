import { Skeleton, Stack } from "@mui/material"

const SkeletonTabContainer = () => {
    return (
        <Stack
            spacing={1}
            style={{
                margin: '1rem auto',
                width : '100%'
            }}
        >
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem',
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: '1rem'
                }}
            />
        </Stack>
    )
}

export default SkeletonTabContainer