import { Skeleton, Stack } from "@mui/material";


const SkeletonStoreContainer = () => {
    return (
        <Stack 
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexWrap={'wrap'}
            spacing={1}
        >
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
            <Skeleton variant="rounded" width={210} height={300} />
        </Stack>
    )
}

export default SkeletonStoreContainer