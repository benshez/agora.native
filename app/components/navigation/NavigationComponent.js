"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationComponent = {
    name: 'navigation-component',
    props: {
        mainContentText: '',
        titleText: ''
    },
    data: function () {
        return {
            routes: []
        };
    },
    created: function () {
        this.routes = [];
        this.fetchRoutes();
    },
    methods: {
        onOpenDrawerTap: function () {
            this.$refs.drawer.nativeView.toggleDrawerState();
        },
        fetchRoutes: function () {
            this.routes = this.$_.filter(this.$router.options.routes, function (o) {
                return o.path !== '*' && o.path !== '/';
            });
        }
    },
    template: "\n    <RadSideDrawer ref=\"drawer\">\n      <StackLayout ~drawerContent backgroundColor=\"lightgray\">\n        <StackLayout height=\"56\" style=\"text-align: left; vertical-align: center;\">\n          <NavigationButton icon=\"res://ic_menu_black_24dp\"></NavigationButton>\n          <Label :text=\"titleText\" padding=\"10\" />\n        </StackLayout>\n        <StackLayout backgroundColor=\"white\">\n          <ListView for=\"(route, $index) in routes\">\n            <v-template>\n              <Label :text=\"route.meta.description\" padding=\"10\" backgroundColor=\"lightgray\" @tap=\"$router.push(route.path)\"></Label>\n            </v-template>\n          </ListView>\n        </StackLayout>\n      </StackLayout>\n      <StackLayout ~mainContent>\n\n      </StackLayout>\n    </RadSideDrawer>\n "
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvbkNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdmlnYXRpb25Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsS0FBSyxFQUFFO1FBQ0wsZUFBZSxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLE9BQU87WUFDTCxNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFDSixDQUFDO0lBQ0QsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsZUFBZTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFDRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBUyxDQUFDO2dCQUNsRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBQ0QsUUFBUSxFQUFFLHl5QkFtQlY7Q0FDRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25Db21wb25lbnQgPSB7XG4gIG5hbWU6ICduYXZpZ2F0aW9uLWNvbXBvbmVudCcsXG4gIHByb3BzOiB7XG4gICAgbWFpbkNvbnRlbnRUZXh0OiAnJyxcbiAgICB0aXRsZVRleHQ6ICcnXG4gIH0sXG4gIGRhdGE6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVzOiBbXVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLmZldGNoUm91dGVzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk9wZW5EcmF3ZXJUYXAoKSB7XG4gICAgICB0aGlzLiRyZWZzLmRyYXdlci5uYXRpdmVWaWV3LnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfSxcbiAgICBmZXRjaFJvdXRlcygpIHtcbiAgICAgIHRoaXMucm91dGVzID0gdGhpcy4kXy5maWx0ZXIodGhpcy4kcm91dGVyLm9wdGlvbnMucm91dGVzLCBmdW5jdGlvbihvKSB7XG4gICAgICAgIHJldHVybiBvLnBhdGggIT09ICcqJyAmJiBvLnBhdGggIT09ICcvJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8UmFkU2lkZURyYXdlciByZWY9XCJkcmF3ZXJcIj5cbiAgICAgIDxTdGFja0xheW91dCB+ZHJhd2VyQ29udGVudCBiYWNrZ3JvdW5kQ29sb3I9XCJsaWdodGdyYXlcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjU2XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0OyB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGljb249XCJyZXM6Ly9pY19tZW51X2JsYWNrXzI0ZHBcIj48L05hdmlnYXRpb25CdXR0b24+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGl0bGVUZXh0XCIgcGFkZGluZz1cIjEwXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgPExpc3RWaWV3IGZvcj1cIihyb3V0ZSwgJGluZGV4KSBpbiByb3V0ZXNcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJyb3V0ZS5tZXRhLmRlc2NyaXB0aW9uXCIgcGFkZGluZz1cIjEwXCIgYmFja2dyb3VuZENvbG9yPVwibGlnaHRncmF5XCIgQHRhcD1cIiRyb3V0ZXIucHVzaChyb3V0ZS5wYXRoKVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8U3RhY2tMYXlvdXQgfm1haW5Db250ZW50PlxuXG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUmFkU2lkZURyYXdlcj5cbiBgXG59O1xuIl19