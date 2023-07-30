import { Stack, Skeleton } from "@mui/material";

const SkeletonTattooContainer = () => {
    return (
        <Stack 
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexWrap={'wrap'}
            spacing={1}
        >
            <Skeleton variant="rounded" width={210} height={210} />
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

export default SkeletonTattooContainer