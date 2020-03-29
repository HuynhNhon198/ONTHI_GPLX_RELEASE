const signs = [
    {
        bienbao: [
            {
                code: ' W.201a',
                desc: ' Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng bên trái.',
                img: 'assets/bienbaonguyhiem/w201a-cho-ngoat-nguy-hiem-vong-ben-trai.jpg',
                name: ' Chỗ ngoặt nguy hiểm vòng bên trái'
            },
            {
                code: ' W.201b',
                desc: ' Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng bên phải.',
                img: 'assets/bienbaonguyhiem/w201b-cho-ngoat-nguy-hiem-vong-ben-phai.jpg',
                name: ' Chỗ ngoặt nguy hiểm vòng bên phải'
            },
            {
                code: ' W.202a',
                desc: ' Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên trái.',
                img: 'assets/bienbaonguyhiem/w202a-cho-ngoat-nguy-hiem-vong-ben-trai.jpg',
                name: ' Chỗ ngoặt nguy hiểm vòng bên trái.'
            },
            {
                code: ' W.202b',
                desc: ' Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên phải .',
                img: 'assets/bienbaonguyhiem/w202b-cho-ngoat-nguy-hiem-vong-ben-phai.jpg',
                name: ' Chỗ ngoặt nguy hiểm vòng bên phải.'
            },
            {
                code: ' W.203a',
                desc: ' Báo trước sắp đến một đoạn đường bị hẹp đột ngột cả hai bên.',
                img: 'assets/bienbaonguyhiem/w203a-duong-bi-hep-ca-hai-ben.jpg',
                name: ' Đường bị hẹp cả hai bên'
            },
            {
                code: ' W.203b',
                desc: ' Báo trước sắp đến một đoạn đường bị hẹp đột ngột về phía trái.',
                img: 'assets/bienbaonguyhiem/w203b-duong-bi-hep-ve-phia-trai.jpg',
                name: ' Đường bị hẹp về phía trái'
            },
            {
                code: ' W.203c',
                desc: ' Báo trước sắp đến một đoạn đường bị hẹp đột ngột về phía phải.',
                img: 'assets/bienbaonguyhiem/w203c-duong-bi-hep-ve-phia-phai.jpg',
                name: ' Đường bị hẹp về phía phải'
            },
            {
                code: ' W.204',
                desc: ' Để báo trước sắp đến đoạn đường vì lý do sửa chữa hoặc có trở ngại ở một phía đường mà phải giải quyết đi lại của phương tiện phía đường còn lại hoặc để báo trước đoạn đường đôi tạm thời hay thường xuyên các chiều xe đi và về phải đi chung.',
                img: 'assets/bienbaonguyhiem/w204-duong-hai-chieu.jpg',
                name: ' Đường hai chiều'
            },
            {
                code: ' W.205a',
                desc: ' Báo trước sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên).',
                img: 'assets/bienbaonguyhiem/w205a-duong-giao-nhau.jpg',
                name: ' Đường giao nhau'
            },
            {
                code: ' W.205b',
                desc: ' Báo trước sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên).',
                img: 'assets/bienbaonguyhiem/w205b-duong-giao-nhau.jpg',
                name: ' Đường giao nhau'
            },
            {
                code: ' W.205c',
                desc: ' Báo trước sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên).',
                img: 'assets/bienbaonguyhiem/w205c-duong-giao-nhau.jpg',
                name: ' Đường giao nhau'
            },
            {
                code: ' W.205d',
                desc: ' Báo trước sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên).',
                img: 'assets/bienbaonguyhiem/w205d-duong-giao-nhau.jpg',
                name: ' Đường giao nhau'
            },
            {
                code: ' W.205e',
                desc: ' Báo trước sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên).',
                img: 'assets/bienbaonguyhiem/w205e-duong-giao-nhau.jpg',
                name: ' Đường giao nhau'
            },
            {
                code: ' W.206',
                desc: ' Báo trước nơi giao nhau có bố trí đảo an toàn ở giữa điểm giao, các loại xe qua điểm giao vòng trái, phải đi vòng xuyến qua đảo an toàn.',
                img: 'assets/bienbaonguyhiem/w206-giao-nhau-chay-theo-vong-xuyen.jpg',
                name: ' Giao nhau chạy theo vòng xuyến'
            },
            {
                code: ' W.207a',
                desc: ' Đặt trên đường ưu tiên, để báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207a-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên'
            },
            {
                code: ' W.207b',
                desc: ' Đặt trên đường ưu tiên, để báo trước sắp đến nơi giao nhau với đường không ưu tiêni.',
                img: 'assets/bienbaonguyhiem/w207b-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên'
            },
            {
                code: ' W.207c',
                desc: ' Đặt trên đường ưu tiên, báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207c-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207d',
                desc: ' Đặt trên đường ưu tiên, báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207d-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207e',
                desc: ' Đặt trên đường ưu tiên ,báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207e-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207f',
                desc: ' Đặt trên đường ưu tiên ,báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207f-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207g',
                desc: ' Đặt trên đường ưu tiên ,báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207g-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207h',
                desc: ' Đặt trên đường ưu tiên ,báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207h-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207i',
                desc: ' Đặt trên đường ưu tiên ,báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207i-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.207k',
                desc: ' Đặt trên đường ưu tiên ,báo trước sắp đến nơi giao nhau với đường không ưu tiên.',
                img: 'assets/bienbaonguyhiem/w207k-giao-nhau-voi-duong-khong-uu-tien.jpg',
                name: ' Giao nhau với đường không ưu tiên.'
            },
            {
                code: ' W.208',
                desc: ' Đặt trên đường không ưu tiên, để báo trước sắp đến nơi giao nhau với đường ưu tiên.',
                img: 'assets/bienbaonguyhiem/w208-giao-nhau-voi-duong-uu-tien.jpg',
                name: ' Giao nhau với đường ưu tiên'
            },
            {
                code: ' W.209',
                desc: ' Để báo trước nơi giao nhau có sự điều khiển giao thông bằng tín hiệu đèn (hệ thống 3 đèn bật theo chiều đứng) và trong trường hợp thiết bị tín hiệu đèn không được nhìn thấy rõ ràng và kịp thời.',
                img: 'assets/bienbaonguyhiem/w209-giao-nhau-co-tin-hieu-den.jpg',
                name: ' Giao nhau có tín hiệu đèn'
            },
            {
                code: ' W.210',
                desc: ' Báo trước sắp đến chỗ giao nhau giữa đường bộ và đường sắt có rào chắn kín hay chắn nửa kín bố trí theo trật tự xen kẽ ở mỗi bên đường sắt và có nhân viên ngành đường sắt điều khiển giao thông.',
                img: 'assets/bienbaonguyhiem/w210-giao-nhau-voi-duong-sat-co-rao-chan.jpg',
                name: ' Giao nhau với đường sắt có rào chắn'
            },
            {
                code: ' W.211a',
                desc: ' Báo trước sắp đến chỗ giao nhau giữa đường bộ và đường sắt không có rào chắn, không có người điều khiển giao thông.',
                img: 'assets/bienbaonguyhiem/w211a-giao-nhau-voi-duong-sat-khong-co-rao-chan.jpg',
                name: ' Giao nhau với đường sắt không có rào chắn'
            },
            {
                code: ' W.211b',
                desc: ' Chỉ nơi đường bộ giao nhau cùng mức với đường tàu điện.',
                img: 'assets/bienbaonguyhiem/w211b-giao-nhau-voi-duong-tau-dien.jpg',
                name: ' Giao nhau với đường tàu điện'
            },
            {
                code: ' W.212',
                desc: ' Báo trước sắp đến cầu hẹp là loại cầu có chiều rộng lòng cầu (phần xe chạy) nhỏ hơn hoặc bằng 4.50 m (1 làn đường). Khi qua các cầu này các xe phải nhường nhau và chờ ở hai đầu cầu.',
                img: 'assets/bienbaonguyhiem/w212-cau-hep.jpg',
                name: ' Cầu hẹp'
            },
            {
                code: ' W.213',
                desc: ' Để báo trước sắp đến cầu tạm là loại cầu được làm để sử dụng tạm thời cho xe cộ qua lại.',
                img: 'assets/bienbaonguyhiem/w213-cau-tam.jpg',
                name: ' Cầu tạm'
            },
            {
                code: ' W.214',
                desc: ' Để báo trước sắp đến cầu xoay, cầu cất là những loại cầu trong từng thời gian có cắt giao thông đường bộ để cho tàu thuyền qua lại. Các phương tiện đi trên đường bộ phải chờ đợi. ﻿',
                img: 'assets/bienbaonguyhiem/w214-cau-xoay-cau-cat.jpg',
                name: ' Cầu xoay-cầu cất'
            },
            {
                code: ' W.216',
                desc: ' Để báo trước những chỗ có đường ngầm (đường tràn). Đường ngầm là những đoạn đường vượt qua sông, suối, khe cạn mà nước có thể chảy tràn qua thường xuyên hoặc khi có lũ. ﻿',
                img: 'assets/bienbaonguyhiem/w216-duong-ngam.jpg',
                name: ' Đường ngầm'
            },
            {
                code: ' W.217',
                desc: ' Để báo trước sắp đến bến phà. Người sử dụng đường phải tuân theo nội quy bến phà. ﻿',
                img: 'assets/bienbaonguyhiem/w217-ben-pha.jpg',
                name: ' Bến phà'
            },
            {
                code: ' W.218',
                desc: ' Để báo trước sắp đến những đường có cổng, kiểu cổng tò vò chắn ngang như cổng đường hầm, cổng thành, cầu vượt đường bộ dạng cầu vòm v.v... ﻿',
                img: 'assets/bienbaonguyhiem/w218-cua-chui.jpg',
                name: ' Cửa chui'
            },
            {
                code: ' W.219',
                desc: ' Báo trước sắp tới chỗ dốc nguy hiểm. Người lái các phương tiện phải chọn phương thức chạy xe cho phù hợp để xe xuống dốc một cách thuận lợi, an toàn ﻿',
                img: 'assets/bienbaonguyhiem/w219-doc-xuong-nguy-hiem.jpg',
                name: ' Dốc xuống nguy hiểm'
            },
            {
                code: ' W.220',
                desc: ' Báo trước sắp tới chỗ dốc nguy hiểm. Người lái các phương tiện phải chọn phương thức chạy xe cho phù hợp để xe lên dốc một cách thuận lợi, an toàn ﻿',
                img: 'assets/bienbaonguyhiem/w220-doc-len-nguy-hiem.jpg',
                name: ' Dốc lên nguy hiểm'
            },
            {
                code: ' W.221a',
                desc: ' Để báo trước sắp tới đoạn đường có mặt đường không bằng phẳng, lồi lõm, sống trâu v.v... xe chạy với tốc độ cao sẽ bị nguy hiểm. ﻿',
                img: 'assets/bienbaonguyhiem/w221a-duong-khong-bang-phang.jpg',
                name: ' Đường không bằng phẳng'
            },
            {
                code: ' W.221b',
                desc: ' Báo hiệu đoạn "đường có sóng mấp mô nhân tạo (humps)" để hạn chế tốc độ xe chạy (biển được cắm kèm theo biển số 227 "Hạn chế tốc độ tối đa"), bắt buộc lái xe phải chạy với tốc độ chậm trước khi qua những điểm cần kiểm soát, kiểm tra... ﻿',
                img: 'assets/bienbaonguyhiem/w221b-duong-khong-bang-phang.jpg',
                name: ' Đường không bằng phẳng'
            },
            {
                code: ' W.222a',
                desc: ' Để báo trước sắp tới đoạn đường có thể xảy ra trơn trượt đặc biệt là khi thời tiết xấu, mưa phùn cần tránh hãm phanh, tăng ga, sang số đột ngột hoặc xe chạy với tốc độ cao sẽ bị nguy hiểm. Khi gặp biển này tốc độ xe chạy phải giảm kịp thời và thận trọng. ﻿',
                img: 'assets/bienbaonguyhiem/w222a-duong-tron.jpg',
                name: ' Đường trơn'
            },
            {
                code: ' W.222b',
                desc: ' Báo những nơi lề đường không ổn định, khi xe đi vào dễ gây văng đất đá hoặc bánh xe quay tại chỗ. ﻿',
                img: 'assets/bienbaonguyhiem/w222b-le-duong-nguy-hiem.jpg',
                name: ' Lề đường nguy hiểm'
            },
            {
                code: ' W.223a',
                desc: ' Biển báo nguy hiểm đường đi sát vách núi ở bên trái. Dùng để báo nguy hiểm cho lái xe lái cẩn thận. ﻿',
                img: 'assets/bienbaonguyhiem/w223a-vach-nui-nguy-hiem.jpg',
                name: ' Vách núi nguy hiểm'
            },
            {
                code: ' W.223b',
                desc: ' Biển báo nguy hiểm đường đi sát vách núi ở bên phảu. Dùng để báo nguy hiểm cho lái xe lái cẩn thận. ﻿',
                img: 'assets/bienbaonguyhiem/w223b-vach-nui-nguy-hiem.jpg',
                name: ' Vách núi nguy hiểm'
            },
            {
                code: ' W.224',
                desc: ' Báo trước sắp đến phần đường ngang dành cho người đi bộ sang qua đường. Gặp biển này các loại xe cộ phải nhường ưu tiên cho người đi bộ và chỉ được chạy xe nếu như không gây nguy hiểm cho người đi bộ. ﻿',
                img: 'assets/bienbaonguyhiem/w224-duong-nguoi-di-bo-cat-ngang.jpg',
                name: ' Đường người đi bộ cắt ngang'
            },
            {
                code: ' W.225',
                desc: ' Báo trước là gần đến đoạn đường thường có trẻ em đi ngang qua hoặc tụ tập trên đường như gần vườn trẻ, trường học, câu lạc bộ. ﻿',
                img: 'assets/bienbaonguyhiem/w225-tre-em.jpg',
                name: ' Trẻ em'
            },
            {
                code: ' W.226',
                desc: ' Báo trước là gần đến chỗ thường có người đi xe đạp từ những đường nhỏ cắt ngang qua hoặc từ đường dành cho xe đạp đo nhập vào đường ô tô. ﻿',
                img: 'assets/bienbaonguyhiem/w226-duong-nguoi-di-xe-dap-cat-ngang.jpg',
                name: ' Đường người đi xe đạp cắt ngang'
            },
            {
                code: ' W.227',
                desc: ' Để báo trước gần tới đoạn đường đang tiến hành sửa chữa có người và máy móc đang làm việc trên mặt đường. Khi gặp biển báo này tốc độ xe chạy phải giảm cho thích hợp, không gây nguy hiểm cho người và máy móc trên đoạn đường đó. ﻿',
                img: 'assets/bienbaonguyhiem/w227-cong-truong.jpg',
                name: ' Công trường'
            },
            {
                code: ' W.228a',
                desc: ' Để báo trước gần tới một đoạn đường có hiện tượng đất đá từ trên ta luy dụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường, đặc biệt là ở những đoạn đường miền núi. Gặp biển này, người lái xe phải chú ý đặc biệt khi thời tiết xấu hạn chế tầm nhìn và khi dừng hay đỗ xe sau những trận mưa lớn. ﻿',
                img: 'assets/bienbaonguyhiem/w228a-da-lo.jpg',
                name: ' Đá lở'
            },
            {
                code: ' W.228b',
                desc: ' Để báo trước gần tới một đoạn đường có hiện tượng đất đá từ trên ta luy dụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường, đặc biệt là ở những đoạn đường miền núi. Gặp biển này, người lái xe phải chú ý đặc biệt khi thời tiết xấu hạn chế tầm nhìn và khi dừng hay đỗ xe sau những trận mưa lớn. ﻿',
                img: 'assets/bienbaonguyhiem/w228b-da-lo.jpg',
                name: ' Đá lở'
            },
            {
                code: ' W.228c',
                desc: ' Báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông. ﻿',
                img: 'assets/bienbaonguyhiem/w228c-soi-da-ban-len.jpg',
                name: ' Sỏi đá bắn lên'
            },
            {
                code: ' W.229',
                desc: ' Để báo trước gần tới đoạn đường ở vùng sát đường băng sân bay và cắt ngang qua hướng máy bay lên xuống ở độ cao không lớn. ﻿',
                img: 'assets/bienbaonguyhiem/w229-giai-may-bay-len-xuong.jpg',
                name: ' Giải máy bay lên xuống'
            },
            {
                code: ' W.230',
                desc: ' Để báo trước gần tới đoạn đường thường có gia súc thả rông hoặc lùa qua ngang đường nguy hiểm, đường ở vùng đồng cỏ của nông trường chăn nuôi, vùng thảo nguyên. Người lái xe có trách nhiệm dừng lại bảo đảm cho gia súc có thể qua đường không bị nguy hiểm. ﻿',
                img: 'assets/bienbaonguyhiem/w230-gia-suc.jpg',
                name: ' Gia súc'
            },
            {
                code: ' W.231',
                desc: ' Để báo trước gần tới đoạn đường thường có thú rừng qua đường như đường đi qua khu vực rừng cây hay khu cấm săn bắn. ﻿',
                img: 'assets/bienbaonguyhiem/w231-thu-rung-vuot-qua-duong.jpg',
                name: ' Thú rừng vượt qua đường'
            },
            {
                code: ' W.232',
                desc: ' Để báo trước gần tới đoạn đường thường có gió ngang thổi mạnh nguy hiểm. Người lái xe cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng tình huống gió thổi lật xe. ﻿',
                img: 'assets/bienbaonguyhiem/w232-gio-ngang.jpg',
                name: ' Gió ngang'
            },
            {
                code: ' W.233',
                desc: ' Để báo trên đường có những nguy hiểm khác. ﻿',
                img: 'assets/bienbaonguyhiem/w233-nguy-hiem-khac.jpg',
                name: ' Nguy hiểm khác'
            },
            {
                code: ' W.234',
                desc: ' Trên đường một chiều, biển này để báo trước sắp đến chỗ giao nhau với đường hai chiều ﻿',
                img: 'assets/bienbaonguyhiem/w234-giao-nhau-voi-duong-hai-chieu.jpg',
                name: ' Giao nhau với đường hai chiều'
            },
            {
                code: ' W.235',
                desc: ' Để báo trước sắp đến đoạn đường đôi (chiều đi và chiều về phân biệt rõ ràng bằng giải phân cách cứng) ﻿',
                img: 'assets/bienbaonguyhiem/w235-duong-doi.jpg',
                name: ' Đường đôi'
            },
            {
                code: ' W.236',
                desc: ' Để báo trước sắp kết thúc đoạn đường đôi (đoạn đường hết giải phân cách). Đường đôi chỉ được chia bằng vạch sơn không phải đặt biển này. ﻿',
                img: 'assets/bienbaonguyhiem/w236-het-duong-doi.jpg',
                name: ' Hết đường đôi'
            },
            {
                code: ' W.237',
                desc: ' Dùng để nhắc nhở lái xe cho cẩn thận. Biển đặt ở nơi thích hợp trên đoạn đường sắp sửa đến chiếc cầu có độ vồng rất lớn ảnh hưởng tới tầm nhìn. ﻿',
                img: 'assets/bienbaonguyhiem/w237-cau-vong.jpg',
                name: ' Cầu vòng'
            },
            {
                code: ' W.238',
                desc: ' Biển này nhằm để báo cho các phương tiện đi trên đường biết có "Đường cao tốc phía trước" ﻿',
                img: 'assets/bienbaonguyhiem/w238-duong-cao-toc-phia-truoc.jpg',
                name: ' Đường cao tốc phía trước'
            },
            {
                code: ' W.239',
                desc: ' Biển này để cảnh báo nơi có đường dây điện cắt ngang phía trên tuyến đường, thường kèm theo biển phụ 509 "Chiều cao an toàn" ở phía dưới. ﻿',
                img: 'assets/bienbaonguyhiem/w239-duong-cap-dien-o-phia-tren.jpg',
                name: ' Đường cáp điện ở phía trên'
            },
            {
                code: ' W.240',
                desc: ' Dùng để nhắc lái xe chú ý đi chậm lại, biển đặt ở nơi thích hợp mà đường sắp sửa đi vào đường hầm chạy hai chiều, mà chiếu sáng lại không tốt. ﻿',
                img: 'assets/bienbaonguyhiem/w240-duong-ham.jpg',
                name: ' Đường hầm'
            },
            {
                code: ' W.241',
                desc: ' Báo đoạn đường hay xảy ra ùn tắc giao thông. ﻿',
                img: 'assets/bienbaonguyhiem/w241-un-tac-giao-thong.jpg',
                name: ' Ùn tắc giao thông'
            },
            {
                code: ' W.242a',
                desc: ' Tại chỗ giao nhau đường sắt chỉ có một đường cắt ngang đường bộ ﻿',
                img: 'assets/bienbaonguyhiem/w242a-cho-duong-sat-cat-duong-bo.jpg',
                name: ' Chỗ đường sắt cắt đường bộ'
            },
            {
                code: ' W.242b',
                desc: ' Tại chỗ giao nhau đường sắt có từ hai đường cắt ngang đường bộ. ﻿',
                img: 'assets/bienbaonguyhiem/w242b-cho-duong-sat-cat-duong-bo.jpg',
                name: ' Chỗ đường sắt cắt đường bộ'
            },
            {
                code: ' W.243a',
                desc: ' Biểu thị sắp đi qua đoạn đường có đường sắt cắt qua, nếu ở nơi giao cắt với đường bộ không có người gác mà trên mặt đường có biển báo “gần vạch tín hiệu của đường sắt giao nhau cùng mức” thì phải đặt thêm kí hiệu đường sắt giao cắt với đường bộ không vuông góc ở phía dưới biển báo “giao cắt với đường bộ của đường sắt không có người gác”. Kí hiệu đường sắt giao cắt với đường bộ không vuông góc có ba loại. Đặt ở nơi cách giao nhau với đường sắt 50m. ﻿',
                img: 'assets/bienbaonguyhiem/w243a-duong-sat-giao-cat-voi-duong-bo-khong-vuong-goc.jpg',
                name: ' Đường sắt giao cắt với đường bộ không vuông góc'
            },
            {
                code: ' W.243b',
                desc: ' Biểu thị sắp đi qua đoạn đường có đường sắt cắt qua, nếu ở nơi giao cắt với đường bộ không có người gác mà trên mặt đường có biển báo “gần vạch tín hiệu của đường sắt giao nhau cùng mức” thì phải đặt thêm kí hiệu đường sắt giao cắt với đường bộ không vuông góc ở phía dưới biển báo “giao cắt với đường bộ của đường sắt không có người gác”. Kí hiệu đường sắt giao cắt với đường bộ không vuông góc có ba loại. Đặt ở nơi cách giao nhau với đường sắt 100m. ﻿',
                img: 'assets/bienbaonguyhiem/w243b-duong-sat-giao-cat-voi-duong-bo-khong-vuong-goc.jpg',
                name: ' Đường sắt giao cắt với đường bộ không vuông góc'
            },
            {
                code: ' W.243c',
                desc: ' Biểu thị sắp đi qua đoạn đường có đường sắt cắt qua, nếu ở nơi giao cắt với đường bộ không có người gác mà trên mặt đường có biển báo “gần vạch tín hiệu của đường sắt giao nhau cùng mức” thì phải đặt thêm kí hiệu đường sắt giao cắt với đường bộ không vuông góc ở phía dưới biển báo “giao cắt với đường bộ của đường sắt không có người gác”. Kí hiệu đường sắt giao cắt với đường bộ không vuông góc có ba loại. Đặt ở nơi cách giao nhau với đường sắt 150m. ﻿',
                img: 'assets/bienbaonguyhiem/w243c-duong-sat-giao-cat-voi-duong-bo-khong-vuong-goc.jpg',
                name: ' Đường sắt giao cắt với đường bộ không vuông góc'
            },
            {
                code: ' W.244',
                desc: ' Dùng để báo nguy hiểm lái xe chú ý đoạn đường phía trước thường xảy ra tai nạn để lái xe cần đặc biệt chú ý. Biển được đặt ở vị trí thích hợp nơi sắp vào đoạn đường thường xảy ra tai nạn. ﻿',
                img: 'assets/bienbaonguyhiem/w244-doan-duong-hay-xay-ra-tai-nan.jpg',
                name: ' Đoạn đường hay xảy ra tai nạn'
            },
            {
                code: ' W.245a',
                desc: ' Dùng để nhắc lái xe giảm tốc độ đi chậm. Biển đặt ở vị trí thích đáng trước khi đến đoạn đường yêu cầu đi chậm. ﻿',
                img: 'assets/bienbaonguyhiem/w245a-di-cham.jpg',
                name: ' Đi chậm'
            },
            {
                code: ' W.245b',
                desc: ' Dùng để nhắc lái xe giảm tốc độ đi chậm, đối với các tuyến đường đối ngoại. Biển đặt ở vị trí thích đáng trước khi đến đoạn đường yêu. cầu đi chậm. ﻿',
                img: 'assets/bienbaonguyhiem/w245b-di-cham.jpg',
                name: ' Đi chậm'
            },
            {
                code: ' W.246a',
                desc: ' Vòng tránh ra hai bên, báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi vòng tránh ra hai bên. ﻿',
                img: 'assets/bienbaonguyhiem/w246a-chu-y-chuong-ngai-vat.jpg',
                name: ' Chú ý chướng ngại vật'
            },
            {
                code: ' W.246b',
                desc: ' Vòng tránh sang bên trái, báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi vòng tránh sang bên trái. ﻿',
                img: 'assets/bienbaonguyhiem/w246b-chu-y-chuong-ngai-vat.jpg',
                name: ' Chú ý chướng ngại vật'
            },
            {
                code: ' W.246c',
                desc: ' Vòng tránh sang bên phải, báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi vòng tránh sang bên phải. ﻿',
                img: 'assets/bienbaonguyhiem/w246c-chu-y-chuong-ngai-vat.jpg',
                name: ' Chú ý chướng ngại vật'
            },
            {
                code: ' W.247',
                desc: ' Cảnh báo có các loại xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô hoặc ôtô đầu kéo; xe máy chuyên dùng đang đỗ chiếm một phần đường xe chạy (biển này tương tự, chỉ lộn ngược đầu so với biển báo nguy hiểm số 208 "Giao nhau với đường ưu tiên"). ﻿',
                img: 'assets/bienbaonguyhiem/w247-chu-y-xe-do.jpg',
                name: ' Chú ý xe đỗ'
            }
        ],
        type: 'bienbaonguyhiem',
        id: 'FvhsRwuqOJVqjPP8SjwA'
    },
    {
        bienbao: [
            {
                code: ' R.401',
                desc: ' Để biểu thị ưu tiên cho các phương tiện trên đường có đặt biển này được đi trước. Biển đặt tại vị trí thích hợp trước khi đường nhánh sắp nhập vào trục đường chính, yêu cầu phương tiện từ đường nhánh ra phải dừng lại nhường cho phương tiện trên đường chính đi trước.',
                img: 'assets/bienbaochidan/r401-bat-dau-duong-uu-tien.jpg',
                name: ' Bắt đầu đường ưu tiên.'
            },
            {
                code: ' R.402',
                desc: ' Báo hiệu hết đoạn đường được ưu tiên',
                img: 'assets/bienbaochidan/r402-het-doan-duong-uu-tien.jpg',
                name: ' Hết đoạn đường ưu tiên.'
            },
            {
                code: ' R.403a',
                desc: ' Để chỉ dẫn bắt đầu đường dành cho các loại ôtô đi lại,các loại phương tiện giao thông khác không được phép đi vào đoạn đường có dặt biển này.',
                img: 'assets/bienbaochidan/r403a-duong-danh-cho-oto.jpg',
                name: ' Đường dành cho ôtô.'
            },
            {
                code: ' R.403b',
                desc: ' Để chỉ dẫn bắt đầu đường dành cho các loại ôtô, xe máy (kể cả xe gắn máy) đi lại,các loại phương tiện giao thông khác không được phép đi vào đoạn đường có dặt biển này.',
                img: 'assets/bienbaochidan/r403b-duong-danh-cho-o-to-xe-may.jpg',
                name: ' Đường dành cho ô tô, xe máy.'
            },
            {
                code: ' R.404a',
                desc: ' Để chỉ dẫn hết đoạn đường dành cho ôtô đi lại.',
                img: 'assets/bienbaochidan/r404a-het-duong-danh-cho-o-to.jpg',
                name: ' Hết đường dành cho ô tô.'
            },
            {
                code: ' R.404b',
                desc: ' Để chỉ dẫnhết đoạn đường dành cho ôtô, xe máy đi lại.',
                img: 'assets/bienbaochidan/r404b-het-duong-danh-cho-o-to-xe-may.jpg',
                name: ' Hết đường dành cho ô tô, xe máy.'
            },
            {
                code: ' R.405a',
                desc: ' Để chỉ dẫn đường cụt, lối rẽ vào đường cụt phía bên phải.',
                img: 'assets/bienbaochidan/r405a-duong-cut.jpg',
                name: ' Đường cụt.'
            },
            {
                code: ' R.405b',
                desc: ' Để chỉ dẫn đường cụt, lối rẽ vào đường cụt phía bên trái.',
                img: 'assets/bienbaochidan/r405b-duong-cut.jpg',
                name: ' Đường cụt.'
            },
            {
                code: ' R.405c',
                desc: ' Để chỉ dẫn phía trước là đường cụt, đặt trước đường cụt 300m đến 500m và cứ 100m phải đặt thêm một biển.',
                img: 'assets/bienbaochidan/r405c-duong-cut.jpg',
                name: ' Đường cụt.'
            },
            {
                code: ' R.406',
                desc: ' Để chỉ dẫn cho người lái xe cơ giới biết mình được quyền ưu tiên đi trước trên đoạn đường hẹp. Nếu trên hướng đi ngược chiều có xe (cơ giới hoặc thô sơ) đã đi vào phạm vi đường hẹp thì xe đi theo chiều ưu tiên cũng phải nhường đường.',
                img: 'assets/bienbaochidan/r406-duoc-uu-tien-qua-duong-hep.jpg',
                name: ' Được ưu tiên qua đường hẹp.'
            },
            {
                code: ' R.407a',
                desc: ' Biển đặt sau ngã ba và ngã tư,biển chỉ dẫn những đoạn đường xe chạy một chiều, chỉ cho phép các loại phương tiện giao thông đường bộ đi vào theo chiều mũi tên chỉ (đi thẳng), cấm quay đầu ngược lại (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ).',
                img: 'assets/bienbaochidan/r407a-duong-mot-chieu.jpg',
                name: ' Đường một chiều.'
            },
            {
                code: ' R.407b',
                desc: ' Biển đặt trướcngã ba và ngã tư,biển chỉ dẫn những đoạn đường xe chạy một chiều, chỉ cho phép các loại phương tiện giao thông đường bộ đi vào theo chiều mũi tên chỉ (quẹo phải), cấm quay đầu ngược lại (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ).',
                img: 'assets/bienbaochidan/r407b-duong-mot-chieu.jpg',
                name: ' Đường một chiều.'
            },
            {
                code: ' R.407c',
                desc: '',
                img: 'assets/bienbaochidan/r407c-duong-mot-chieu.jpg',
                name: ' Đường Một Chiều'
            },
            {
                code: ' R.408',
                desc: ' Để chỉ dẫn những nơi được phép đỗ xe, những bãi đỗ xe, bến xe v.v...',
                img: 'assets/bienbaochidan/r408-noi-do-xe.jpg',
                name: ' Nơi đỗ xe.'
            },
            {
                code: ' R.409',
                desc: ' Biển chỉ dẫn vị trí được phép quay đầu xe kiểu chữ U nhưng không cho phép rẽ trái, trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ.',
                img: 'assets/bienbaochidan/r409-cho-quay-xe.jpg',
                name: ' Chỗ quay xe.'
            },
            {
                code: ' R.410',
                desc: ' Biển chỉ dẫn khu vực cho phép quay đầu xe kiểu chữ U nhưng không cho phép rẽ trái, trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ.',
                img: 'assets/bienbaochidan/r410-khu-vuc-quay-xe.jpg',
                name: ' Khu vực quay xe.'
            },
            {
                code: ' R.411',
                desc: ' Biển chỉ dẫn cho người lái xe biêt số lượng làn đường trên mặt đường và hướng đi trên một làn đường theo vạch kẻ đường. Biển có tác dụng bắt buộc người lái xe phải giữ đúng hướng đã được chỉ dẫn trên mỗi làn.',
                img: 'assets/bienbaochidan/r411-huong-di-tren-moi-lan-duong-theo-vach-ke-duong.jpg',
                name: ' Hướng đi trên mỗi làn đường theo vạch kẻ đường.'
            },
            {
                code: ' R.412a',
                desc: ' Biển chỉ dẫn cho người lái xe biết cólàn đường dành riêng cho xe ôtô khách (kể cả xe buýt, taxi). Biển được đặt ở đầu đường theo hướng đi của xe ôtô khách. Các loại xe khác không được đi vào làn đường có đặt biển này trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ.',
                img: 'assets/bienbaochidan/r412a-lan-duong-danh-cho-oto-khach.jpg',
                name: ' Làn đường dành cho ôtô khách.'
            },
            {
                code: ' R.412b',
                desc: ' Biển chỉ dẫn cho người lái xe biết có làn đường dành riêng cho xe ôtô con. Biển được đặt ở đầu đường theo hướng đi của xe ôtô con. Các loại xe khác không được đi vào làn đường có đặt biển này (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ.)',
                img: 'assets/bienbaochidan/r412b-lan-duong-danh-cho-oto-con.jpg',
                name: ' Làn đường dành cho ôtô con.'
            },
            {
                code: ' R.412c',
                desc: ' Biển chỉ dẫn cho người lái xe biết có làn đường dành riêng cho xe ôtô tải. Biển được đặt ở đầu đường theo hướng đi của xe ôtô tải. Các loại xe khác không được đi vào làn đường có đặt biển này (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ.)',
                img: 'assets/bienbaochidan/r412c-lan-duong-danh-cho-oto-tai.jpg',
                name: ' Làn đường dành cho ôtô tải.'
            },
            {
                code: ' R.412d',
                desc: ' Biển chỉ dẫn cho người lái xe biết cólàn đường dành riêng cho xe môtô. Biển được đặt ở đầu đường theo hướng đi của xe môtô. Các loại xe khác không được đi vào làn đường có đặt biển này (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ).',
                img: 'assets/bienbaochidan/r412d-lan-duong-danh-cho-moto.jpg',
                name: ' Làn đường dành cho môtô.'
            },
            {
                code: ' R.413a',
                desc: ' Để chỉ dẫn cho người lái xe biết đường có làn đường dành riêng cho ôtô khách theo chiều ngược lại.',
                img: 'assets/bienbaochidan/r413a-duong-co-lan-duong-danh-cho-o-to-khach.jpg',
                name: ' Đường có làn đường dành cho ô tô khách'
            },
            {
                code: ' R.413b',
                desc: ' Để chỉ dẫn cho người lái xe biết ở nơi đường giao nhau rẽ phải là rẽ ra đường có làn đường dành cho ôtô khách.',
                img: 'assets/bienbaochidan/r413b-re-ra-duong-co-lan-duong-danh-cho-o-to-khach.jpg',
                name: ' Rẽ ra đường có làn đường dành cho ô tô khách'
            },
            {
                code: ' R.413c',
                desc: ' Để chỉ dẫn cho người lái xe biết ở nơi đường giao nhau rẽ trái là rẽ ra đường có làn đường dành cho ôtô khách.',
                img: 'assets/bienbaochidan/r413c-re-ra-duong-co-lan-duong-danh-cho-o-to-khach.jpg',
                name: ' Rẽ ra đường có làn đường dành cho ô tô khách'
            },
            {
                code: ' R.414a',
                desc: ' Đặt ở nơi đường giao nhau và chỉ có một địa danh và khu dân cư trên hướng đường cần phải chỉ dẫn.',
                img: 'assets/bienbaochidan/r414a-chi-huong-duong.jpg',
                name: ' Chỉ hướng đường'
            },
            {
                code: ' R.414b',
                desc: ' Đặt ở nơi đường giao nhau và chỉ có một địa danh và khu dân cư trên hướng đường cần phải chỉ dẫn.',
                img: 'assets/bienbaochidan/r414b-chi-huong-duong.jpg',
                name: ' Chỉ hướng đường'
            },
            {
                code: ' R.414c',
                desc: ' Đặt ở nơi đường giao nhau có từ hai địa danh, khu dân cư cần phải chỉ dẫn trên biển. Địa danh xa hơn phải viết phía dưới.',
                img: 'assets/bienbaochidan/r414c-chi-huong-duong.jpg',
                name: ' Chỉ hướng đường'
            },
            {
                code: ' R.414d',
                desc: ' Đặt ở nơi đường giao nhau có từ hai địa danh, khu dân cư cần phải chỉ dẫn trên biển. Địa danh xa hơn phải viết phía dưới.',
                img: 'assets/bienbaochidan/r414d-chi-huong-duong.jpg',
                name: ' Chỉ hướng đường'
            },
            {
                code: ' R.415',
                desc: ' Được đặt trong khu đông dân cư, ở các đường giao nhau để chỉ dẫn hướng đi đến một địa danh lân cận tiếp theo và khoảng cách (km) đến nơi đó. Nếu biển này đặt trên đường cao tốc thì phía bên trái biển có thêm hình vẽ đường cao tốc.',
                img: 'assets/bienbaochidan/r415-mui-ten-chi-huong-di.jpg',
                name: ' Mũi tên chỉ hướng đi'
            },
            {
                code: ' R.416',
                desc: ' Đặt trước các đường giao nhau, để chỉ dẫn lối đi đường tránh, đường vòng trong trường hợp đường chính bị tắc, hoặc đường chính cấm một số loại xe đi qua.',
                img: 'assets/bienbaochidan/r416-loi-di-duong-vong-tranh.jpg',
                name: ' Lối đi đường vòng tránh'
            },
            {
                code: ' R.417a',
                desc: ' Đặt ở các đường giao nhau trong trường hợp cấm hoặc hạn chế một số loại xe, phải có biển để chỉ hướng đường phải đi cho từng loại xe đến một khu dân cư tiếp theo.',
                img: 'assets/bienbaochidan/r417a-chi-huong-duong-phai-di-cho-tung-loai-xe.jpg',
                name: ' Chỉ hướng đường phải đi cho từng loại xe'
            },
            {
                code: ' R.417b',
                desc: ' Đặt ở các đường giao nhau trong trường hợp cấm hoặc hạn chế một số loại xe, phải có biển để chỉ hướng đường phải đi cho từng loại xe đến một khu dân cư tiếp theo.',
                img: 'assets/bienbaochidan/r417b-chi-huong-duong-phai-di-cho-tung-loai-xe.jpg',
                name: ' Chỉ hướng đường phải đi cho từng loại xe'
            },
            {
                code: ' R.417c',
                desc: ' Đặt ở các đường giao nhau trong trường hợp cấm hoặc hạn chế một số loại xe, phải có biển để chỉ hướng đường phải đi cho từng loại xe đến một khu dân cư tiếp theo.',
                img: 'assets/bienbaochidan/r417c-chi-huong-duong-phai-di-cho-tung-loai-xe.jpg',
                name: ' Chỉ hướng đường phải đi cho từng loại xe'
            },
            {
                code: ' R.418',
                desc: ' Để chỉ lối đi ở các nơi đường giao nhau bị cấm rẽ. Biển được đặt ở nơi đường giao nhau trước đường cấm rẽ.',
                img: 'assets/bienbaochidan/r418-loi-di-o-nhung-vi-tri-cam-re.jpg',
                name: ' Lối đi ở những vị trí cấm rẽ'
            },
            {
                code: ' R.419',
                desc: ' Để chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện.',
                img: 'assets/bienbaochidan/r419-chi-dan-dia-gioi.jpg',
                name: ' Chỉ dẫn địa giới'
            },
            {
                code: ' R.420',
                desc: ' Để chỉ dẫn bắt đầu vào phạm vi khu đông dân cư, người sử dụng đường biết phạm vi phải tuân theo những quy định đi đường được áp dụng ở khu đông dân cư.',
                img: 'assets/bienbaochidan/r420-bat-dau-khu-dong-dan-cu.jpg',
                name: ' Bắt đầu khu đông dân cư'
            },
            {
                code: ' R.421',
                desc: ' Để chỉ dẫn hết phạm vi khu đông dân cư, người sử dụng đường biết phạm vi phải tuân theo những quy định đi đường được áp dụng ở khu đông dân cư đã hết hiệu lực.',
                img: 'assets/bienbaochidan/r421-het-khu-dong-dan-cu.jpg',
                name: ' Hết khu đông dân cư'
            },
            {
                code: ' R.422',
                desc: ' Để chỉ dẫn những nơi có di tích lịch sử hoặc những nơi có danh lam thắng cảnh, những nơi có thể thăm quan v.v... ở hai ven đường.',
                img: 'assets/bienbaochidan/r422-di-tich-lich-su.jpg',
                name: ' Di tích lịch sử'
            },
            {
                code: ' R.423a',
                desc: ' Để chỉ dẫn cho người đi bộ và người lái xe biết nơi dành cho người đi bộ sang ngang. Biển này được sử dụng độc lập ở những vị trí sang ngang, đường không có tổ chức điều khiển giao thông hoặc có thể sử dụng phối hợp với vạch kẻ đường. Gặp biển này người lái xe phải điều khiển xe chạy chậm, chú ý quan sát, ưu tiên cho người đi bộ sang ngang.',
                img: 'assets/bienbaochidan/r423a-duong-nguoi-di-bo-sang-ngang.jpg',
                name: ' Đường người đi bộ sang ngang'
            },
            {
                code: ' R.423b',
                desc: ' Để chỉ dẫn cho người đi bộ và người lái xe biết nơi dành cho người đi bộ sang ngang. Biển này được sử dụng độc lập ở những vị trí sang ngang, đường không có tổ chức điều khiển giao thông hoặc có thể sử dụng phối hợp với vạch kẻ đường. Gặp biển này người lái xe phải điều khiển xe chạy chậm, chú ý quan sát, ưu tiên cho người đi bộ sang ngang.',
                img: 'assets/bienbaochidan/r423b-duong-nguoi-di-bo-sang-ngang.jpg',
                name: ' Đường người đi bộ sang ngang'
            },
            {
                code: ' R.424a',
                desc: ' Để chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường.',
                img: 'assets/bienbaochidan/r424a-cau-vuot-qua-duong-cho-nguoi-di-bo.jpg',
                name: ' Cầu vượt qua đường cho người đi bộ'
            },
            {
                code: ' R.424b',
                desc: ' Để chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường.',
                img: 'assets/bienbaochidan/r424b-cau-vuot-qua-duong-cho-nguoi-di-bo.jpg',
                name: ' Cầu vượt qua đường cho người đi bộ'
            },
            {
                code: ' R.424c',
                desc: ' Để chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường.',
                img: 'assets/bienbaochidan/r424c-ham-chui-qua-duong-cho-nguoi-di-bo.jpg',
                name: ' Hầm chui qua đường cho người đi bộ'
            },
            {
                code: ' R.424d',
                desc: ' Để chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường.',
                img: 'assets/bienbaochidan/r424d-ham-chui-qua-duong-cho-nguoi-di-bo.jpg',
                name: ' Hầm chui qua đường cho người đi bộ'
            },
            {
                code: ' R.425',
                desc: ' Để chỉ dẫn sắp đến cơ sở điều trị bệnh ở gần đường như bệnh viện, bệnh xá, trạm xá v.v... Gặp biển này người lái xe đi chậm, chú ý quan sát và không sử dụng còi.',
                img: 'assets/bienbaochidan/r425-benh-vien.jpg',
                name: ' Bệnh viện'
            },
            {
                code: ' R.426',
                desc: ' Để chỉ dẫn nơi có trạm cấp cứu y tế ở gần đường',
                img: 'assets/bienbaochidan/r426-tram-cap-cuu.jpg',
                name: ' Trạm cấp cứu'
            },
            {
                code: ' R.427a',
                desc: ' Để chỉ dẫn nơi đặt xưởng, trạm chuyên phục vụ sửa chữa ôtô, môtô hỏng trên đường.',
                img: 'assets/bienbaochidan/r427a-tram-sua-chua.jpg',
                name: ' Trạm sửa chữa'
            },
            {
                code: ' R.427b',
                desc: ' Để chỉ dẫn nơi đặt trạm kiểm tra tải trọng xe.',
                img: 'assets/bienbaochidan/r427b-tram-kiem-tra-tai-trong-xe.jpg',
                name: ' Trạm kiểm tra tải trọng xe'
            },
            {
                code: ' R.428',
                desc: ' Để chỉ dẫn những nơi có đặt trạm kinh doanh xăng dầu phục vụ cho xe cộ đi trên đường.',
                img: 'assets/bienbaochidan/r428-tram-cung-cap-xang-dau.jpg',
                name: ' Trạm cung cấp xăng dầu'
            },
            {
                code: ' R.429',
                desc: ' Để chỉ dẫn những nơi có bố trí rửa xe.',
                img: 'assets/bienbaochidan/r429-noi-rua-xe.jpg',
                name: ' Nơi rửa xe'
            },
            {
                code: ' R.430',
                desc: ' Để chỉ dẫn những nơi có đặt trạm điện thoại công cộng chuyên phục vụ khách đi đường.',
                img: 'assets/bienbaochidan/r430-dien-thoai.jpg',
                name: ' Điện thoại'
            },
            {
                code: ' R.431',
                desc: ' Để chỉ dẫn những nơi có các dịch vụ phục vụ khách đi đường (ăn uống nghỉ ngơi, cung cấp nhiên liệu …). Tùy trạm dừng nghỉ có dịch vụ gì mà bố trí các biểu tượng hình vẽ cho phù hợp.',
                img: 'assets/bienbaochidan/r431-tram-dung-nghi.jpg',
                name: ' Trạm dừng nghỉ'
            },
            {
                code: ' R.432',
                desc: ' Để chỉ dẫn nơi có khách sạn phục vụ khách đi đường.',
                img: 'assets/bienbaochidan/r432-khach-san.jpg',
                name: ' Khách sạn'
            },
            {
                code: ' R.433',
                desc: ' Để chỉ dẫn nơi nghỉ mát.',
                img: 'assets/bienbaochidan/r433-noi-nghi-mat.jpg',
                name: ' Nơi nghỉ mát'
            },
            {
                code: ' R.434a',
                desc: ' Để chỉ dẫn chỗ dừng đỗ xe buýt cho khách lên xuống.',
                img: 'assets/bienbaochidan/r434a-ben-xe-buyt.jpg',
                name: ' Bến xe buýt'
            },
            {
                code: ' R.434b',
                desc: ' Để chỉ dẫn khu vực đỗ xe tải để nhận và trả hàng hóa.',
                img: 'assets/bienbaochidan/r434b-ben-xe-tai.jpg',
                name: ' Bến xe tải'
            },
            {
                code: ' R.435',
                desc: ' Để chỉ dẫn chỗ dừng đỗ xe điện cho khách lên xuống.',
                img: 'assets/bienbaochidan/r435-ben-xe-dien.jpg',
                name: ' Bến xe điện'
            },
            {
                code: ' R.436',
                desc: ' Để chỉ dẫn nơi đặt trạm cảnh sát giao thông. Các phương tiện phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.',
                img: 'assets/bienbaochidan/r436-tram-canh-sat-giao-thong.jpg',
                name: ' Trạm cảnh sát giao thông'
            },
            {
                code: ' R.437',
                desc: ' Để chỉ dẫn bắt đầu đường cao tốc.',
                img: 'assets/bienbaochidan/r437-duong-cao-toc.jpg',
                name: ' Đường cao tốc'
            },
            {
                code: ' R.438',
                desc: ' Để chỉ hết đường cao tốc',
                img: 'assets/bienbaochidan/r438-het-duong-cao-toc.jpg',
                name: ' Hết đường cao tốc'
            },
            {
                code: ' R.439',
                desc: ' Để chỉ các thông tin về một cây cầu.',
                img: 'assets/bienbaochidan/r439-ten-cau.jpg',
                name: ' Tên cầu'
            },
            {
                code: ' R.440',
                desc: ' Để chỉ dẫn những đoạn đường đang thi công sửa chữa hoặc nâng cấp cải tạo.',
                img: 'assets/bienbaochidan/r440-doan-duong-thi-cong.jpg',
                name: ' Đoạn đường thi công'
            },
            {
                code: ' R.441a',
                desc: ' Để báo cho người sử dụng đường biết phía trước có công trường thi công, sửa chữa hoặc nâng cấp.Biểnđược đặt ở hai đầu đoạn thi công và cách hai đầu đoạn thi công 500m, trước biển số 440.',
                img: 'assets/bienbaochidan/r441a-bao-hieu-phia-truoc-co-cong-truong-thi-cong.jpg',
                name: ' Báo hiệu phía trước có công trường thi công'
            },
            {
                code: ' R.441b',
                desc: ' Để báo cho người sử dụng đường biết phía trước có công trường thi công, sửa chữa hoặc nâng cấp.Biểnđược đặt ở hai đầu đoạn thi công và cách hai đầu đoạn thi công 100m, trước biển số 440.',
                img: 'assets/bienbaochidan/r441b-bao-hieu-phia-truoc-co-cong-truong-thi-cong.jpg',
                name: ' Báo hiệu phía trước có công trường thi công'
            },
            {
                code: ' R.441c',
                desc: ' Để báo cho người sử dụng đường biết phía trước có công trường thi công, sửa chữa hoặc nâng cấp.Biểnđược đặt ở hai đầu đoạn thi công và cách hai đầu đoạn thi công 50m, trước biển số 440.',
                img: 'assets/bienbaochidan/r441c-bao-hieu-phia-truoc-co-cong-truong-thi-cong.jpg',
                name: ' Báo hiệu phía trước có công trường thi công'
            },
            {
                code: ' R.442',
                desc: ' Để báo sắp đến khu vực có chợ gần đường, xe cơ giới qua lại khu vực này phải chú ý quan sát, giảm tốc độ.',
                img: 'assets/bienbaochidan/r442-cho.jpg',
                name: ' Chợ'
            },
            {
                code: ' R.443',
                desc: ' Để báo hiệu xe có kéo moóc hoặc xe kéo xe, biển này được đặt trên nóc xe kéo.',
                img: 'assets/bienbaochidan/r443-xe-keo-mooc.jpg',
                name: ' Xe kéo moóc'
            },
            {
                code: ' R.444a',
                desc: ' Đặt biển ở trước nơi đường giao nhau chỉ hướng vào ga xe lửa.',
                img: 'assets/bienbaochidan/r444a-ga-xe-lua.jpg',
                name: ' Ga xe lửa'
            },
            {
                code: ' R.444b',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào sân bay.',
                img: 'assets/bienbaochidan/r444b-bien-bao-san-bay.jpg',
                name: ' Biển báo sân bay'
            },
            {
                code: ' R.444c',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào bãi đậu xe.',
                img: 'assets/bienbaochidan/r444c-bien-bao-bai-dau-xe.jpg',
                name: ' Biển báo bãi đậu xe'
            },
            {
                code: ' R.444d',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào bến xe khách đường dài.',
                img: 'assets/bienbaochidan/r444d-bien-bao-ben-xe-khach-duong-dai.jpg',
                name: ' Biển báo bến xe khách đường dài'
            },
            {
                code: ' R.444e',
                desc: ' Đặtbiển ở nơi đường giao nhau với đường vào bệnh viện và trạm cấp cứu.',
                img: 'assets/bienbaochidan/r444e-bien-chi-dan-tram-cap-cuu.jpg',
                name: ' Biển chỉ dẫn trạm cấp cứu'
            },
            {
                code: ' R.444f',
                desc: '',
                img: 'assets/bienbaochidan/r444f-chi-dan-dia-diem.jpg',
                name: ' Chỉ Dẫn Địa Điểm'
            },
            {
                code: ' R.444g',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào khu danh thắng và du lịch.',
                img: 'assets/bienbaochidan/r444g-bien-chi-dan-khu-danh-thang-va-du-lich.jpg',
                name: ' Biển chỉ dẫn khu danh thắng và du lịch'
            },
            {
                code: ' R.444h',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào trạm bán xăng dầu.',
                img: 'assets/bienbaochidan/r444h-bien-chi-dan-tram-xang.jpg',
                name: ' Biển chỉ dẫn trạm xăng'
            },
            {
                code: ' R.444i',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào trạm phục vụ rửa xe.',
                img: 'assets/bienbaochidan/r444i-bien-chi-dan-tram-rua-xe.jpg',
                name: ' Biển chỉ dẫn trạm rửa xe'
            },
            {
                code: ' R.444j',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường ra bến phà.',
                img: 'assets/bienbaochidan/r444j-bien-chi-dan-ben-pha.jpg',
                name: ' Biển chỉ dẫn bến phà'
            },
            {
                code: ' R.444k',
                desc: ' Đặtbiển ở nơi đường giao nhau với đường vào ga tàu điện ngầm.',
                img: 'assets/bienbaochidan/r444k-bien-bao-ga-tau-dien-ngam.jpg',
                name: ' Biển báo ga tàu điện ngầm'
            },
            {
                code: ' R.444l',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào trạm dừng nghỉ.',
                img: 'assets/bienbaochidan/r444l-bien-chi-dan-khu-vuc-dich-vu-cho-khach-di-duong.jpg',
                name: ' Biển chỉ dẫn khu vực dịch vụ cho khách đi đường'
            },
            {
                code: ' R.444m',
                desc: ' Đặtbiển ở trước nơi đường giao nhau với đường vào trạm sửa chữa xe trong khu dịch vụ.',
                img: 'assets/bienbaochidan/r444m-bien-bao-tram-sua-chua-xe.jpg',
                name: ' Biển báo trạm sửa chữa xe'
            },
            {
                code: ' R.445a',
                desc: ' Biển đặt tại vị trí thích hợp trước đoạn đường bị trơn trượt khi trời mưa hoặc láng đầu v.v...',
                img: 'assets/bienbaochidan/r445a-bieu-bao-duong-tron-phai-chay-cham.jpg',
                name: ' Biểu báo đường trơn phải chạy chậm'
            },
            {
                code: ' R.445b',
                desc: ' Biểnđặt ở vị trí thích hợp trước đoạn đường có độ dốc lớn và tầm nhìn hạn chế.',
                img: 'assets/bienbaochidan/r445b-bien-bao-duong-doc-phai-di-cham-lai-xe-phai-can-than.jpg',
                name: ' Biển báo đường dốc phải đi chậm, lái xe phải cẩn thận'
            },
            {
                code: ' R.445c',
                desc: ' Biểnđặt trước đoạn đường nhiều sương mù.',
                img: 'assets/bienbaochidan/r445c-bien-bao-doan-duong-suong-mu-tam-nhin-han-che-phai-di-cham-tap-trung-quan-sat.jpg',
                name: ' Biển báo đoạn đường sương mù, tầm nhìn hạn chế phải đi chậm, tập trung quan sát.'
            },
            {
                code: ' R.445d',
                desc: ' Biểnđặt ở vị trí thích hợp trước đoạn đường mà nền đường có hiện tượng sụt lún, không bằng phẳng, nhắc nhở lái xe đi chậm và cẩn thận.',
                img: 'assets/bienbaochidan/r445d-bien-bao-doan-duong-co-nen-duong-yeu.jpg',
                name: ' Biển báo đoạn đường có nền đường yếu'
            },
            {
                code: ' R.445e',
                desc: ' Biểnđặt ở nơi thích hợp trước khi đi vào đoạn đường có từ hai làn xe trở lên, hướng dẫn cho lái xe lớn hoặc quá khổ phải đi tốc độ thấp không được chiếm làn đường của các loại xe khác.',
                img: 'assets/bienbaochidan/r445e-bien-bao-xe-lon-hoac-qua-kho-di-sat-ve-ben-phai.jpg',
                name: ' Biển báo xe lớn hoặc quá khổ đi sát về bên phải'
            },
            {
                code: ' R.445f',
                desc: ' Biểnđặt biển ở vị trí trước khi đi vào cầu lớn, cầu vượt qua vịnh hoặc cửa núi đoạn đường thường có gió ngang cường độ mạnh.',
                img: 'assets/bienbaochidan/r445f-bien-bao-xe-lon-hoac-qua-kho-di-sat-ve-ben-phai.jpg',
                name: ' Biển báo xe lớn hoặc quá khổ đi sát về bên phải'
            },
            {
                code: ' R.445g',
                desc: ' Đặt biển ở nơi thích hợp trước khi vào đoạn đường hay xẩy ra tai nạn.',
                img: 'assets/bienbaochidan/r445g-bien-bao-doan-duong-nguy-hiem-hay-xay-ra-tai-nan.jpg',
                name: ' Biển báo đoạn đường nguy hiểm hay xẩy ra tai nạn'
            },
            {
                code: ' R.445h',
                desc: ' Đặtbiển ở nơi thích hợp khi sắp vào đoạn đường xuống dốc liên tục, nhằm nhắc nhở lái xe phải đi chậm, đi sát bên phải.',
                img: 'assets/bienbaochidan/r445h-bien-bao-duong-xuong-doc-lien-tuc.jpg',
                name: ' Biển báo đường xuống dốc liên tục'
            },
            {
                code: ' R.446',
                desc: ' Để báo hiệu nơi đỗ xe dành cho người tàn tật',
                img: 'assets/bienbaochidan/r446-noi-do-xe-danh-cho-nguoi-tan-tat.jpg',
                name: ' Nơi đỗ xe dành cho người tàn tật'
            },
            {
                code: ' R.447a',
                desc: ' Biển đặt tại vị trí trước khi vào cầu vượt có tổ chức giao thông liên thông giữa các tuyến.',
                img: 'assets/bienbaochidan/r447a-bien-bao-cau-vuot-lien-thong.jpg',
                name: ' Biển báo cầu vượt liên thông'
            },
            {
                code: ' R.447b',
                desc: ' Biển đặt tại vị trí trước khi vào cầu vượt có tổ chức giao thông liên thông giữa các tuyến.',
                img: 'assets/bienbaochidan/r447b-bien-bao-cau-vuot-lien-thong.jpg',
                name: ' Biển báo cầu vượt liên thông'
            },
            {
                code: ' R.447c',
                desc: ' Biển đặt tại vị trí trước khi vào cầu vượt có tổ chức giao thông liên thông giữa các tuyến.',
                img: 'assets/bienbaochidan/r447c-bien-bao-cau-vuot-lien-thong.jpg',
                name: ' Biển báo cầu vượt liên thông'
            },
            {
                code: ' R.447d',
                desc: ' Biển đặt tại vị trí trước khi vào cầu vượt có tổ chức giao thông liên thông giữa các tuyến.',
                img: 'assets/bienbaochidan/r447d-bien-bao-cau-vuot-lien-thong.jpg',
                name: ' Biển báo cầu vượt liên thông'
            }
        ],
        type: 'bienbaochidan',
        id: 'KJqmvg1dDN7MWzsZIgjN'
    },
    {
        bienbao: [
            {
                code: ' P.109',
                desc: ' Để báo đường cấm các loại xe máy kéo đi qua.',
                img: 'assets/bienbaocam/p109-cam-may-keo.jpg',
                name: ' Cấm máy kéo'
            },
            {
                code: ' P.110a',
                desc: ' Để báo đường cấm xe đạp đi qua. ﻿',
                img: 'assets/bienbaocam/p110a-cam-di-xe-dap.jpg',
                name: ' Cấm đi xe đạp'
            },
            {
                code: ' P.110b',
                desc: ' Để báo đường cấm xe đạp thồ đi qua. Biển này không cấm người dắt loại xe này. ﻿',
                img: 'assets/bienbaocam/p110b-cam-xe-dap-tho.jpg',
                name: ' Cấm xe đạp thồ'
            },
            {
                code: ' P.111a',
                desc: ' Để báo đường cấm xe gắn máy đi qua. Biển không có giá trị đối với xe đạp. ﻿',
                img: 'assets/bienbaocam/p111a-cam-xe-gan-may.jpg',
                name: ' Cấm xe gắn máy'
            },
            {
                code: ' P.111b',
                desc: ' Để báo đường cấm xe ba bánh loại có động cơ như xe lam, xích lô máy, xe lôi máy v.v... ﻿',
                img: 'assets/bienbaocam/p111b-cam-xe-ba-banh-loai-co-dong-co-xe-lam.jpg',
                name: ' Cấm xe ba bánh loại có động cơ (xe lam)'
            },
            {
                code: ' P.111c',
                desc: ' Để báo đường cấm xe ba bánh loại có động cơ như xe lam, xích lô máy, xe lôi máy v.v...áo hiệu: Để báo đường cấm xe ba bánh loại có động cơ như xe lam, xích lô máy, xe lôi máy v.v... ﻿',
                img: 'assets/bienbaocam/p111c-cam-xe-ba-banh-loai-co-dong-co-xe-loi-may.jpg',
                name: ' Cấm xe ba bánh loại có động cơ (xe lôi máy)'
            },
            {
                code: ' P.111d',
                desc: ' Để báo đường cấm xe ba bánh loại không có động cơ như xích lô, xe lôi, xe đạp v.v... ﻿',
                img: 'assets/bienbaocam/p111d-cam-xe-ba-banh-loai-khong-co-dong-co.jpg',
                name: ' Cấm xe ba bánh loại không có động cơ'
            },
            {
                code: ' P.112',
                desc: ' Để báo đường cấm đi bộ qua lại. ﻿',
                img: 'assets/bienbaocam/p112-cam-nguoi-di-bo.jpg',
                name: ' Cấm người đi bộ'
            },
            {
                code: ' P.113',
                desc: ' Để báo đường cấm xe người kéo, đẩy đi qua. Biển không có giá trị cấm những xe nôi của trẻ em và phương tiện chuyên dùng để đi lại của người tàn tật. ﻿',
                img: 'assets/bienbaocam/p113-cam-xe-nguoi-keo-day.jpg',
                name: ' Cấm xe người kéo, đẩy'
            },
            {
                code: ' P.114',
                desc: ' Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua. ﻿',
                img: 'assets/bienbaocam/p114-cam-xe-xuc-vat-keo.jpg',
                name: ' Cấm xe xúc vật kéo'
            },
            {
                code: ' P.115',
                desc: ' Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định, có trọng lượng toàn bộ (cả xe và hàng) vượt quá trị số ghi trên biển đi qua. ﻿',
                img: 'assets/bienbaocam/p115-han-che-trong-luong-xe.jpg',
                name: ' Hạn chế trọng lượng xe'
            },
            {
                code: ' P.116',
                desc: ' Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định, có trọng lượng toàn bộ (cả xe và hàng) phân bổ trên một trục bất kỳ của xe vượt quá trị số ghi trên biển đi qua. ﻿',
                img: 'assets/bienbaocam/p116-han-che-trong-luong-tren-truc-xe.jpg',
                name: ' Hạn chế trọng lượng trên trục xe'
            },
            {
                code: ' P.117',
                desc: ' Cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều cao (tính đến điểm cao nhất kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua. ﻿',
                img: 'assets/bienbaocam/p117-han-che-chieu-cao.jpg',
                name: ' Hạn chế chiều cao'
            },
            {
                code: ' P.118',
                desc: ' Cấm các xe (cơ giới và thô sơ) kể cả các xe ược ưu tiên theo luật lệ nhà nước quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua. ﻿',
                img: 'assets/bienbaocam/p118-han-che-chieu-ngang.jpg',
                name: ' Hạn chế chiều ngang'
            },
            {
                code: ' P.119',
                desc: ' Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định, có độ dài toàn bộ kể cả xe và hàng lớn hơn trị số ghi trên biển đi qua. ﻿',
                img: 'assets/bienbaocam/p119-han-che-chieu-dai-oto.jpg',
                name: ' Hạn chế chiều dài ôtô'
            },
            {
                code: ' P.120',
                desc: ' Đường cấm các loại xe (cơ giới và thô sơ) kéo theo moóc kể cả ôtô sơ-mi rơ-moóc và các loại xe được ưu tiên kéo moóc theo luật lệ nhà nước quy định, có độ dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển đi qua. ﻿',
                img: 'assets/bienbaocam/p120-han-che-chieu-dai-oto-keo-mooc.jpg',
                name: ' Hạn chế chiều dài ôtô kéo moóc'
            },
            {
                code: ' P.121',
                desc: ' Để báo xe ôtô phải đi cách nhau một khoảng tối thiểu. Số ghi trên biển cho biết khoảng cách tối thiểu tính bằng mét. Biển có hiệu lực cấm các xe ôtô không được đi cách nhau kể cả các xe được ưu tiên theo luật lệ nhà nước quy định một cự ly nhỏ hơn trị số ghi trên biển báo. ﻿',
                img: 'assets/bienbaocam/p121-cu-ly-toi-thieu-giua-hai-xe.jpg',
                name: ' Cự ly tối thiểu giữa hai xe'
            },
            {
                code: ' P.122',
                desc: ' Biển có hiệu lực buộc các xe cơ giới và thô sơ kể cả các xe được ưu tiên theo luật lệ Nhà nước quy định dừng lại trước biển hoặc trước vạch ngang đường và chỉ được phép đi khi thấy các tín hiệu (do người điều khiển giao thông hoặc đèn, cờ) cho phép đi. ﻿',
                img: 'assets/bienbaocam/p122-dung-lai.jpg',
                name: ' Dừng lại'
            },
            {
                code: ' P.123a',
                desc: ' Cấm rẽ trái (theo hướng mũi tên chỉ) ở những chỗ đường giao nhau. Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo luật lệ Nhà nước quy định được rẽ trái. ﻿',
                img: 'assets/bienbaocam/p123a-cam-re-trai.jpg',
                name: ' Cấm rẽ trái'
            },
            {
                code: ' P.123b',
                desc: ' Để báo cấm rẽ phải (theo hướng mũi tên chỉ) ở những chỗ đường giao nhau. Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo luật lệ Nhà nước quy định được rẽ phải. ﻿',
                img: 'assets/bienbaocam/p123b-cam-re-phai.jpg',
                name: ' Cấm rẽ phải'
            },
            {
                code: ' P.124a',
                desc: ' Cấm các loại xe (cơ giới và thô sơ) quay đầu theo kiểu chữ U, trừ các xe được ưu tiên theo luật lệ Nhà nước quy định. ﻿',
                img: 'assets/bienbaocam/p124a-cam-quay-xe.jpg',
                name: ' Cấm quay xe'
            },
            {
                code: ' P.124b',
                desc: ' Cấm xe ôtô và xe môtô 3 bánh (cide car) quay đầu theo kiểu chữ U, trừ các xe được ưu tiên theo luật lệ Nhà nước quy định. ﻿',
                img: 'assets/bienbaocam/p124b-cam-oto-quay-dau-xe.jpg',
                name: ' Cấm ôtô quay đầu xe'
            },
            {
                code: ' P.125',
                desc: ' Cấm các loại xe cơ giới vượt nhau kể cả các xe được ưu tiên theo luật lệ Nhà nước quy định. Được phép vượt xe mô tô 2 bánh, xe gắn máy. ﻿',
                img: 'assets/bienbaocam/p125-cam-vuot.jpg',
                name: ' Cấm vượt'
            },
            {
                code: ' P.126',
                desc: ' Cấm tất cả các loại ô tô tải có trọng lượng lớn nhất cho phép (bao gồm trọng lượng xe và hàng) trên 3.5 tấn kể cả các xe được ưu tiên theo luật lệ Nhà nước quy định vượt nhau. Được phép vượt xe mô tô 2 bánh, xe gắn máy. ﻿',
                img: 'assets/bienbaocam/p126-cam-oto-tai-vuot.jpg',
                name: ' Cấm ôtô tải vượt'
            },
            {
                code: ' P.127',
                desc: ' Cấm tất cả các loại xe cơ giới chạy với tốc độ tối đa vượt quá trị số ghi trên biển, trừ các xe được ưu tiên theo luật lệ Nhà nước quy định. ﻿',
                img: 'assets/bienbaocam/p127-toc-do-toi-da-cho-phep.jpg',
                name: ' Tốc độ tối đa cho phép'
            },
            {
                code: ' P.128',
                desc: ' Cấm các loại xe cơ giới sử dụng còi. ﻿',
                img: 'assets/bienbaocam/p128-cam-bop-coi.jpg',
                name: ' Cấm bóp còi'
            },
            {
                code: ' P.129',
                desc: ' Để báo nơi đặt trạm kiểm tra, các loại phương tiện vận tải qua đó phải dừng lại để làm thủ tục kiểm tra, kiểm soát theo luật lệ nhà nước quy định. ﻿',
                img: 'assets/bienbaocam/p129-kiem-tra.jpg',
                name: ' Kiểm tra'
            },
            {
                code: ' P.130',
                desc: ' Để báo nơi cấm dừng xe và đỗ xe. Biển có hiệu lực cấm tất cả các loại xe cơ giới dừng và đỗ lại ở phía đường có đặt biển, trừ các xe được ưu tiên theo luật lệ Nhà nước quy định. ﻿',
                img: 'assets/bienbaocam/p130-cam-dung-xe-va-do-xe.jpg',
                name: ' Cấm dừng xe và đỗ xe'
            },
            {
                code: ' P.131a',
                desc: ' Để báo nơi cấm đỗ xe. Biển có hiệu lực cấm tất cả các loại xe cơ giới đỗ lại ở phía đường có đặt biển, trừ các xe được ưu tiên theo luật quy định.',
                img: 'assets/bienbaocam/p131a-cam-do-xe.jpg',
                name: ' Cấm đỗ xe'
            },
            {
                code: ' P.131b',
                desc: ' Để báo nơi cấm đỗ xe vào các ngày lẻ trong tháng. Biển có hiệu lực cấm tất cả các loại xe cơ giới đỗ lại ở phía đường có đặt biển, trừ các xe được ưu tiên theo luật quy định.',
                img: 'assets/bienbaocam/p131b-cam-do-xe-ngay-le.jpg',
                name: ' Cấm đỗ xe ngày lẻ'
            },
            {
                code: ' P.131c',
                desc: ' Để báo nơi cấm đỗ xe vào các ngày chẵn trong tháng. Biển có hiệu lực cấm tất cả các loại xe cơ giới đỗ lại ở phía đường có đặt biển, trừ các xe được ưu tiên theo luật quy định.',
                img: 'assets/bienbaocam/p131c-cam-do-xe-ngaychan.jpg',
                name: ' Cấm đỗ xe ngày chẵn'
            },
            {
                code: ' P.132',
                desc: ' Để báo các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định đi theo chiều nhìn thấy biển phải nhường đường cho các loại xe cơ giới đi theo hướng ngược lại khi đi qua các đoạn đường và cầu hẹp.',
                img: 'assets/bienbaocam/p132-nhuong-duong-cho-xe-co-gioi-di-nguoc-chieu-qua-duong-hep.jpg',
                name: ' Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp'
            },
            {
                code: ' P.133',
                desc: ' Biển báo các xe cơ giới được phép vượt nhau nhưng phải theo đúng luật đi đường bộ quy định về điều kiện cho phép vượt nhau.',
                img: 'assets/bienbaocam/p133-het-cam-vuot.jpg',
                name: ' Hết cấm vượt'
            },
            {
                code: ' P.134',
                desc: ' Biển báo hết đoạn đường hạn chế tốc độ tối đa. Kể từ biển này, các xe được phép chạy với tốc độ tối đa đã quy định trong Luật Giao thông đường bộ.',
                img: 'assets/bienbaocam/p134-het-han-che-toc-do-toi-da.jpg',
                name: ' Hết hạn chế tốc độ tối đa'
            },
            {
                code: ' P.135',
                desc: ' Biển báo hiệu đoạn đường hết tất cả các lệnh cấm.',
                img: 'assets/bienbaocam/p135-het-tat-ca-cac-lenh-cam.jpg',
                name: ' Hết tất cả các lệnh cấm'
            },
            {
                code: ' P.136',
                desc: ' Biểu thị ở phía trước cấm tất cả các loại xe đi thẳng.',
                img: 'assets/bienbaocam/p136-cam-di-thang.jpg',
                name: ' Cấm đi thẳng'
            },
            {
                code: ' P.137',
                desc: ' Biểu thị ở ngã đường phía trước cấm tất cả các loại xe cộ rẽ trái và rẽ phải',
                img: 'assets/bienbaocam/p137-cam-re-trai-va-re-phai.jpg',
                name: ' Cấm rẽ trái và rẽ phải'
            },
            {
                code: ' P.138',
                desc: ' Biểu thị ở ngã tư, ngã năm đường phía trước cấm tất cả các loại xe đi thẳng và rẽ trái.',
                img: 'assets/bienbaocam/p138-cam-di-thang-va-re-trai.jpg',
                name: ' Cấm đi thẳng và rẽ trái'
            },
            {
                code: ' P.139',
                desc: ' Biểu thị ở ngã tư, ngã năm đường phía trước cấm tất cả các loại xe đi thẳng và rẽ phải.',
                img: 'assets/bienbaocam/p139-cam-di-thang-va-re-phai.jpg',
                name: ' Cấm đi thẳng và rẽ phải'
            },
            {
                code: ' P.140',
                desc: '',
                img: 'assets/bienbaocam/p140-cam-xe-cong-nong.jpg',
                name: ' Cấm Xe Công Nông'
            },
            {
                code: ' P.101',
                desc: ' Biển đường cấm là biển báo giao thông báo đường cấm tất cả các loại phương tiện (cơ giới và thô sơ) đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định.',
                img: 'assets/bienbaocam/p101-duong-cam.jpg',
                name: ' Đường Cấm'
            },
            {
                code: ' P.102',
                desc: ' Biển cấm đi ngược chiều là biển báo giao thông báo hiệu đường cấm tất cả các loại xe (cơ giới và thô sơ) đi vào theo chiều đặt biển, trừ các xe được ưu tiên theo luật lệ nhà nước quy định.',
                img: 'assets/bienbaocam/p102-cam-di-nguoc-chieu.jpg',
                name: ' Cấm Đi Ngược Chiều'
            }
        ],
        type: 'bienbaocam',
        id: 'bghLZfXskaUhEoWHEYAm'
    },
    {
        bienbao: [
            {
                code: ' 301a',
                desc: ' Các xe chỉ được đi thẳng (trừ xe được quyền ưu tiên theo quy định)',
                img: 'assets/bienbaohieulenh/301a-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301b',
                desc: ' các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau nơi đường giao nhau.',
                img: 'assets/bienbaohieulenh/301b-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301c',
                desc: ' Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định).Biển nàyđược đặt ở saunơi đường giao nhau.',
                img: 'assets/bienbaohieulenh/301c-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301d',
                desc: ' Các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định).Biển nàyđược đặt ở trước nơi đường giao nhau, có tác dụng tại nơi giao nhau đằng sau mặt biển.',
                img: 'assets/bienbaohieulenh/301d-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301e',
                desc: ' Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định).Biển nàyđược đặt ở trước nơi đường giao nhau, có tác dụng tại nơi giao nhau đằng sau mặt biển.',
                img: 'assets/bienbaohieulenh/301e-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301f',
                desc: ' Các xe chỉ được đi thẳng và rẽ phải (trừ xe được quyền ưu tiên theo quy định).',
                img: 'assets/bienbaohieulenh/301f-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301h',
                desc: ' Các xe chỉ được đi thẳng và rẽ trái (trừ xe được quyền ưu tiên theo quy định).',
                img: 'assets/bienbaohieulenh/301h-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' 301i',
                desc: ' Các xe chỉ được rẽ phải và rẽ trái (trừ xe được quyền ưu tiên theo quy định).',
                img: 'assets/bienbaohieulenh/301i-huong-di-phai-theo.jpg',
                name: ' Hướng đi phải theo'
            },
            {
                code: ' R.302a',
                desc: ' Báo các loại xe (cơ giới và thô sơ) hướng đi vòng sang phải để qua một chướng ngại vật.',
                img: 'assets/bienbaohieulenh/r302a-huong-phai-di-vong-chuong-ngai-vat.jpg',
                name: ' Hướng phải đi vòng chướng ngại vật.'
            },
            {
                code: ' R.302b',
                desc: ' Báocác loại xe (cơ giới và thô sơ) hướng đi vòng sang trái để qua một chướng ngại vật.',
                img: 'assets/bienbaohieulenh/r302b-huong-phai-di-vong-chuong-ngai-vat.jpg',
                name: ' Hướng phải đi vòng chướng ngại vật.'
            },
            {
                code: ' R.303',
                desc: ' Báo cho các loại xe (thô sơ và cơ giới) phải chạy vòng theo đảo an toàn ở nơi đường giao nhau.',
                img: 'assets/bienbaohieulenh/r303-noi-giao-nhau-chay-theo-vong-xuyen.jpg',
                name: ' Nơi giao nhau chạy theo vòng xuyến.'
            },
            {
                code: ' R.304',
                desc: ' Báođường dành cho xe thô sơ (kể cả xe của người tàn tật) và người đi bộ. Biển bắt buộc các loại xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải dùng đường dành riêng này để đi và cấm các xe cơ giới kể cả xe gắn máy, các xe được ưu tiên theo quy định đi vào đường đã đặt biển này.',
                img: 'assets/bienbaohieulenh/r304-duong-danh-cho-xe-tho-so.jpg',
                name: ' Đường dành cho xe thô sơ.'
            },
            {
                code: ' R.305',
                desc: ' Báođường dành cho người đi bộ. Các loại xe cơ giới và thô sơ kể cả các xe được ưu tiên theo quy định không được phép đi vào đường đã đặt biển này, trừ trường hợp đi cắt ngang qua nhưng phải đảm bảo tuyệt đối an toàn cho người đi bộ.',
                img: 'assets/bienbaohieulenh/r305-duong-danh-cho-nguoi-di-bo.jpg',
                name: ' Đường dành cho người đi bộ.'
            },
            {
                code: ' R.306',
                desc: ' Báo tốc độ tối thiểu cho phép các xe cơ giới chạy. Biển cấm các loại xe cơ giới chạy với tốc độ nhỏ hơn trị số ghi trên biển.',
                img: 'assets/bienbaohieulenh/r306-toc-do-toi-thieu-cho-phep.jpg',
                name: ' Tốc độ tối thiểu cho phép.'
            },
            {
                code: ' R.307',
                desc: ' Báo hết đoạn đường hạn chế tốc độ tối thiểu. Kể từ biển này các xe được phép chạy chậm hơn trị số ghi trên biển nhưng không được gây cản trở các xe khác.',
                img: 'assets/bienbaohieulenh/r307-het-han-che-toc-do-toi-thieu.jpg',
                name: ' Hết hạn chế tốc độ tối thiểu.'
            },
            {
                code: ' R.308a',
                desc: ' Biểu thị phía trước có cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái.',
                img: 'assets/bienbaohieulenh/r308a-tuyen-duong-cau-vuot-cat-qua.jpg',
                name: ' Tuyến đường cầu vượt cắt qua.'
            },
            {
                code: ' R.308b',
                desc: ' Biểu thị phía trước có cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ phải.',
                img: 'assets/bienbaohieulenh/r308b-tuyen-duong-cau-vuot-cat-qua.jpg',
                name: ' Tuyến đường cầu vượt cắt qua.'
            },
            {
                code: ' R.309',
                desc: ' Biểu thị xe cộ đi đến vị trí cắm biển đó thì phải ấn còi.',
                img: 'assets/bienbaohieulenh/r309-an-coi.jpg',
                name: ' Ấn còi.'
            },
            {
                code: ' R.310a',
                desc: ' Báo cho các loại xe chở hàng nguy hiểm phải đi theo hướng quy định (rẽ phải).',
                img: 'assets/bienbaohieulenh/r310a-huong-di-phai-theo-cho-cac-xe-cho-hang-nguy-hiem.jpg',
                name: ' Hướng đi phải theo cho các xe chở hàng nguy hiểm.'
            }
        ],
        type: 'bienbaohieulenh',
        id: 'uFczOWTEYCO2LPDo7bGl'
    }
];

export function getSignByType(type: string) {
    return signs.find(x => x.type === type);
}
